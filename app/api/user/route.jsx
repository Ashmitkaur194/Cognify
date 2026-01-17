import { usersTable } from "@/config/schema";
import { NextResponse } from "next/server";
import { db } from "@/config/db.jsx";
import { eq } from "drizzle-orm";

export async function POST(req)
{
    const {email,name}=await req.json();

    // if user already exist?
    const users=await db.select().from(usersTable)
    .where(eq(usersTable.email,email));

    // if not then insert new user
    if(users?.length==0){
        const result=await db.insert(usersTable).values({
            name:name,
            email:email
        }).returning(usersTable);
        return NextResponse.json(result)

    }
    return NextResponse.json(users[0])
}