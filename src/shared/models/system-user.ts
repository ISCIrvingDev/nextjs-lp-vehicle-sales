export type SystemUser = {
  id: string;
  email: string;
  username: string;
  // password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date | null;
  roleId: string;
  role: SystemRole;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type SystemRole = {
  id: string;
  name: string;
  modules: SystemModule[];
};

type SystemModule = {
  id: string;
  name: string;
  label: string;
};

// Ejemplo
/*
{
    "id": "cmitaa9lc0000nxbk9j1s56b2",
    "email": "admin@test.com",
    "username": "admin",
    "firstName": "Irving",
    "lastName": "Salazar",
    "dateOfBirth": "1989-09-12T00:00:00.000Z",
    "roleId": "e1a5998366cb487728076c210",
    "isActive": true,
    "createdAt": "2025-12-05T19:54:46.417Z",
    "updatedAt": "2025-12-18T19:34:14.625Z",
    "role": {
        "id": "e1a5998366cb487728076c210",
        "name": "Admin",
        "modules": [
            {
                "id": "2cdf3ee327d348fd881caaa9c",
                "name": "dashboard"
            },
            {
                "id": "0f3193ac2bfa4f27bc92bbff6",
                "name": "vehicles"
            },
            {
                "id": "efeee89c68ae443a9b6ac4202",
                "name": "inventory"
            },
            {
                "id": "c7d52d69ecb5455bb563e14d7",
                "name": "customers"
            },
            {
                "id": "5f23acb66d79471ebc41aff0a",
                "name": "sales"
            },
            {
                "id": "e0b242f9b5e64f8ea157a9a1a",
                "name": "earnings-reports"
            },
            {
                "id": "622f8973f8e743b4a8068b43f",
                "name": "suppliers"
            },
            {
                "id": "0164c22b63954b849fc6cb150",
                "name": "users"
            },
            {
                "id": "f006c965dee04b4fa93c30f55",
                "name": "roles"
            }
        ]
    }
}
*/
