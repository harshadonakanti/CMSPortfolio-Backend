import UserInfo from "../models/UserInfo.js";

export const saveUserInfo = async (req, res) => {
  try {
    const { name, role, description } = req.body;

    const image = req.file ? req.file.filename : null;

    let userData = await UserInfo.findOne();

    if (userData) {

      userData.name = name;
      userData.role = role;
      userData.description = description;
      if (image) userData.image = image;
      await userData.save();
    } else {

      userData = await UserInfo.create({
        name,
        role,
        description,
        image,
      });
    }

    res.status(200).json({ success: true, data: userData });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
export const getUserInfo = async (req, res) => {
  try {
    const userData = await UserInfo.findOne();
    res.status(200).json({ success: true, data: userData });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
