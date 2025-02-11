import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => {
    const {email, password, username} = req.body;
    //console.log(email, password, username);
    try {
        const passwordHash = await bcrypt.hash(password,10);
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });

        const userSaved = await newUser.save();
        const token = await createAccessToken({ id: userSaved._id});
        res.cookie("token", token);
        //res.json(userSaved);
        /* jwt.sign(
            {
                id:userSaved._id,
            },
            "secret123",
            {
                expiresIn: "1d",
            },
            (err, token) => {
                if(err) console.log(err);
                res.cookie('token',token)
                res.json({
                    message: "Usuario creado exitosamente",
                })                
            }
        ); */

        res.json({
            id:userSaved.id,
            username:userSaved.username,
            email:userSaved.email,
            createdAt:userSaved.createdAt,
            updatedAt:userSaved.updatedAt,
        });
    } catch (error) {
        console.log(error);                
    }
    //console.log(newUser);  
    
};
export const login = (req, res) => res.send('login');