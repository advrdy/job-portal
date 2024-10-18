import { application } from "express";
import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";
export const applyjob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res
        .status(400)
        .json({ message: "job is required", success: false });
    }
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplication) {
      return res
        .status(400)
        .json({ message: "application already exists", success: false });
    }

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(400).json({ message: "job not found", success: false });
    }
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });
    job.applications.push(newApplication._id);
    await job.save();
    return res
      .status(201)
      .json({ message: "application created successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};
export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const applications = await Application.find({ applicant: userId }).populate(
      {
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      }
    );
    if (!applications) {
      return res
        .status(404)
        .json({ message: "No applications found", success: false });
    }
    return res
      .status(200)
      .json({ message: "Applications found", applications, success: true });
  } catch (error) {
    console.log(error);
  }
};
// export const getApplicants = async (req, res) => {
//   try {
//     const jobId = req.params.id;
//     const job = await Job.findById(jobId).populate({
//       path: "applications",
//       options: { sort: { createdAt: -1 } },
//       populate: {
//         path: "applicant",
//         options: { sort: { createdAt: -1 } },
//       },
//     });
//     if (!job) {
//       return res.status(404).json({
//         message: "Job not found",
//         success: false,
//       });
//     }
//     return res.status(200).json({
//       applications: job.applications,
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
        options: { sort: { createdAt: -1 } },
      },
    });
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      return res.status(400).json({
        message: "staus is required",
        success: false,
      });
    }
    const application = await Application.findOne({ _id: applicationId });
    if (!application) {
      return res.status(404).json({
        message: "application not found",
        success: false,
      });
    }
    application.status = status.toLowerCase();
    await application.save();
    return res.status(200).json({
      message: "application status updated",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
