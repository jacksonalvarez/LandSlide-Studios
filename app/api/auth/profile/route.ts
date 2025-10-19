import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-this-in-production'
);

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'No authentication token found' },
        { status: 401 }
      );
    }

    // Verify the JWT token
    const { payload } = await jwtVerify(token, JWT_SECRET);

    return NextResponse.json({
      success: true,
      user: {
        id: payload.userId,
        email: payload.email,
        name: payload.name,
        role: payload.role
      }
    });

  } catch (error) {
    console.error('Profile verification error:', error);
    return NextResponse.json(
      { error: 'Invalid token' },
      { status: 401 }
    );
  }
}