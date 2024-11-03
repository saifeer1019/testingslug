import User from '@/models/User';
import connectionToDatabase from '@/lib/mongoose';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await connectionToDatabase();
    console.log('here');
    const {name, email} = await request.json();
    console.log(name, email);
    const user = await User.create({name, email});
    console.log(user);
    return NextResponse.json(user);
    }
    catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
