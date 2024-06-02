const express = require("express");
const Room = require("../Model/Room.Model");

//Get A Room
async function GetRoom(req, res) {
  let id = req.params.id;
  try {
    let room = await Room.findById(id);
    res.status(500).json(room);
  } catch (error) {
    res.status(500).semd({ message: error });
  }
}

//Get All Rooms
async function GetAllRoom(req, res) {
  try {
    let rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    req.status(500).send({ message: error });
  }
}

//Update Room
async function UpdateRoom(req, res) {
  try {
    let updateroominformations = await Room.updateOne(
      { _id: req.params.id },
      {
        $set: {
          Name: req.body.Name,
          Location: req.body.Location,
          Number: req.body.Number,
          Status: req.body.Status,
          Description: req.body.Description,
          PricePerNight: req.body.PricePerNight,
          Capacity: req.body.Capacity,
        },
      }
    );
    res.status(200).json(updateroominformations);
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

//Delete Room
async function DeleteRoom(req, res) {
  let id = req.params.id;

  try {
    let delected = await Room.findByIdAndDelete(id);
    req.status(200).send("Room Delected");
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

module.exports = {
  GetRoom,
  GetAllRoom,
  UpdateRoom,
  DeleteRoom,
};
