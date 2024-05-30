const express = require("express");
const Hotel = require("../Model/Hotel.Model");

const HotelçRouter = express.Router();

async function CreateHotel(req, res) {
    const NewHotel = new Hotel({
        Name: req.body.Name,
        Address: req.body.Address,
        Phone: req.body.Phone,
        Email: req.body.Email,
        Stars: req.body.Stars,
        ChekingTime: req.body.ChekingTime,
        CheckoutTime: req.body.CheckoutTime
    })

    try {
        let hotel = await NewHotel.save();
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

async function GetHotel(req, res) {
    let id = req.params.id;
    try {
        let hotel = await Hotel.findById(id)
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

async function UpdateHotelInfos(req, res) {
    try {
        let updatehotelinfos = await Hotel.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    Name: req.body.Name,
                    Address: req.body.Address,
                    Phone: req.body.Phone,
                    Email: req.body.Email,
                    Stars: req.body.Stars,
                    ChekingTime: req.body.ChekingTime,
                    CheckoutTime: req.body.CheckoutTime
                }
            }
        )
        res.status(200).send(updatehotelinfos)
    } catch (error) {
        res.status(500).json({ message: erros })
    }
}

module.exports = {
    CreateHotel,
    GetHotel,
    UpdateHotelInfos
}