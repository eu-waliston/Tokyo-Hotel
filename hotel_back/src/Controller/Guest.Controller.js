const express = require('express')
const Guest = require("../Model/Guest.Model")

async function getGuest(req, re) {
    let guestID = req.params.id;
    try {
        let guest = await Guest.findById(guestID)
        res.tatus(200).json(guest)
    } catch (error) {
        res.status(500).send({ message: error })
    }
}

async function getAllGuests(req, res) {
    try {
        let allguests = await Guest.find()
        res.status(200).json(allguests)
    } catch (error) {
        res.status(500).send({ message: error })
    }
}

async function createGuest(req, res) {
    const newGuest = ({
        FirstName: req.params.FirstName,
        LastName: req.params.LastName,
        DateBirth: req.params.DateBirth,
        Address: req.params.Address,
        Phone: req.params.Phone,
        Email: req.params.Email
    })

    try {
        let guest = await newGuest.save()
        res.status(200).json(guest)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

async function updateGuest(req, res) {
    try {
        let updatedguestinfos = await Guest.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    FirstName: req.params.FirstName,
                    LastName: req.params.LastName,
                    DateBirth: req.params.DateBirth,
                    Address: req.params.Address,
                    Phone: req.params.Phone,
                    Email: req.params.Email
                }
            }
        )
        res.status(200).send(updatedguestinfos)
    } catch (error) {
        res.status(500).send({ message: error })
    }
}

async function deleteGuest(req, res) {
    let id = req.params.id;
    try {
        await Guest.findByIdAndDelete(id)
        res.status(200).send({ message: "User delected...." })
    } catch (error) {
        res.status(500).send({ message: error })
    }
}

module.exports = {
    getGuest,
    getAllGuests,
    createGuest,
    updateGuest,
    deleteGuest
}