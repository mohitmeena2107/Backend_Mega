import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({
    cloud_name:process.env.CLOUDNAME,
    api_key:process.env.APIKEY,
    api_secret:process.env.APISECRET
})

const CloudinaryUpload = async (filepath)=>{
    try {
        if(!filepath) return null // File Path Existence Check


        const response = await cloudinary.uploader.upload(filepath, {
            resource_type: "auto"
        })
        // console.log("Check upload ",response.url);

        fs.unlinkSync(filepath)
        return response;
    }
    catch(err) {
        //console.log("Error Occurred",error);
        fs.unlinkSync(filepath)
        return null
    }
}

export {CloudinaryUpload}