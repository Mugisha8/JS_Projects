import apartments from "../Models/ApartmentModel.js";

export const PostProduct = async (req, res) => {
  try {
    const apartment = await apartments.create(req.body);
    res.status(200).json(apartment);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getApartments = async (req, res) => {
  try {
    const apartment = await apartments.find({});
    res.status(200).json(apartment);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getApartment = async (req, res) => {
  try {
    const { id } = req.params;
    const apartment = await apartments.findById(id);
    if (!apartment) {
      res
        .status(404)
        .json({ message: `No apartment Available for this Id ${id}` });
    }
    res.status(200).json(apartment);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const UpdateApartment = async (req, res) => {
  try {
    const { id } = req.params;
    const apartment = await apartments.findByIdAndUpdate(id, req.body);
    if (!apartment) {
      res.status(404).json({ message: `Apartment not updated` });
    }
    const updatApartment = await apartments.findById(id);
    res.status(200).json(updatApartment);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const DeleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const apartment = await apartments.findByIdAndDelete(id);
    if (!apartment) {
      res
        .status(404)
        .json({ message: `Apartment of the ID: ${id} is not found.` });
    }

    res.status(200).json(apartment);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
