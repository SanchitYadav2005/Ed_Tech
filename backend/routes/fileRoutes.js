const express = require("express");
const router = express.Router();
const {
  uploadFile,
  getAllFiles,
  getSingleFile,
  deleteFile,
} = require("../controllers/fileController");
const { setDeveloperId } = require("../middlware");
router.use(setDeveloperId)

router.post("/developer/file", uploadFile);
router.get("/files", getAllFiles);
router.get("/:id/file", getSingleFile);
router.delete("/:id/delete", deleteFile);

module.exports = router;
