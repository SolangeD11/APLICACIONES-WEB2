// import { envs } from './config/plugins/envs.plugin'
import { PrismaClient } from '@prisma/client';
import { create } from 'domain';

const prisma = new PrismaClient();

const createOrigenIdioma= async ()=>{
    const OrigenIdiomaCreated= await prisma.origenIdiomaModel.create({
        data:{
            nombrepais:"España",
            idiomaoficial:"Español",
            idioma:{
                create:{
                  nombreidioma:"Español"
                
                }
            }
        }
    });
    console.log(OrigenIdiomaCreated)
    
}

const queryUser= async ()=>{
    const user= await prisma.origenIdiomaModel.findMany({
        include:{
            idioma:true
        }
        , where:{
            id:1
        }
    })
    console.log(user)
}

const updateUser= async ()=>{
    const user= await prisma.origenIdiomaModel.update({
        data:{
            nombrepais:"España"
        },
        where:{
            id:1
        }
    })
}

const deleteUser= async ()=>{
    const user= await prisma.origenIdiomaModel.delete({
        where:{
            id:1
        }
    })
}

(async ()=>{
    
    await createOrigenIdioma()
    //await queryUser()
    //await updateUser()
    //await deleteUser()

})()