
/*
FILE: src/app/models/staff.model.ts
WHAT: Defines the structure of a staff member.
WHY: Ensures staff data follows a consistent TypeScript type.
*/

export interface StaffMember {
  id: number;
  name: string;
  department: string;
  role: string;
  bio: string;
  quote: string;
  photo: string;
  featured: boolean;
}
