import About from "../models/about.js";

export const getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    return res.status(200).json({ success: true, data: about });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const saveAbout = async (req, res) => {
  try {
    const { description } = req.body;
    let about = await About.findOne();
    if (about) {
      about.description = description;
      await about.save();
    } else {
      about = await About.create({ description });
    }
    return res.status(200).json({ success: true, data: about });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
