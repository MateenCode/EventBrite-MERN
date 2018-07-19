const express = require('express');
const router = express.Router();

const Event = require('../../models/Event');



// @route Get api/events/test
// @desc Tests post route
// @access Public
router.get('/test', (req, res) => res.json({msg:"Events Works"})
);

router.post('/CreatePost', (req, res) => {

    const newEvent = new Event({
      img: req.body.img,
      date: req.body.date,
      title: req.body.title,
      location: req.body.location,
      price: req.body.price
    });

    newEvent.save()
})


router.get('/GetEvents', (req, res) => {
  Event.find({}).then((data)=>{
    console.log(data)
    res.json(data)
  })
})





module.exports = router;
