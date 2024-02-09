import { NextApiRequest, NextApiResponse } from 'next';
import Rooms from '../../../module/model/room';
import sequelizeUser from '../../../module/model/user'
import { hashPassword } from '../../../utils/hash';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const {id} = req.body;


    const room = await Rooms.findOne({where:{id:id}})
    console.log(room?.dataValues,id)
    if(room){
        res
            .status(201)
            .json({ success: true, message: 'Room geted succesfully', room });
    }else{
        res
            .status(422)
            .json({ success: false, message: 'An error occured', room:null });
    }




    
  } else {
    res.status(400).json({ success: false, message: 'Invalid method' });
  }
}
