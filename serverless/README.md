## API Endpoint Reference

### `user/v1/create`

Updates a users email address

**POST**

**Body**

Required

```
{
  "email": string,
  "password": string,
}
```

**Success Response**

Code: 200

`{ authToken: JWT, ID: UserID }`

**Error Response**

Code: 400

Missing required fields

Code: 409

User already exists

---

### `user/v1/read/{id}`

Gets user profile information

**GET**


**Path Parameters**

id - User ID - required

**Headers**

authtoken - JWT - required

**Success Response**

Code: 200

`{ data: UserDataObject }`


**Error Response**

Code: 401

`{ body: 'Unauthorized' }`

---

### `user/v1/update/password/{id}`

Updates a users password

**POST**


**Path Parameters**

id - User ID - required

**Headers**

authtoken - JWT - required

**Body**

Required

```
{
  "password": string,
  "newPassword": string,
}
```

**Success Response**

Code: 200

**Error Response**

Code: 401

`{ body: 'Unauthorized' }`

---

### `user/v1/update/email/{id}`

Updates a users email address

**POST**


**Path Parameters**

id - User ID - required

**Headers**

authtoken - JWT - required

**Body**

Required

```
{
  "email": string
}
```

**Success Response**

Code: 200

**Error Response**

Code: 401

`{ body: 'Unauthorized' }`

---

### `user/v1/login`

Authenticates a user and returns a JWT

**POST**

**Body**

Required

```
{
  "email": string
  "password": string
}
```

**Success Response**

Code: 200

`{ authToken: JWT, ID: UserID }`

**Error Response**

Code: 401

Unauthorized

Code: 404

User doesn't exist

---

### `user/v1/update/profile/{id}`

Updates a users profile information

**POST**


**Path Parameters**

id - User ID - required

**Headers**

authtoken - JWT - required

**Body**

Required

```
{
  Address: {
    ...
  },
  StripeCustomerID: string,
  otherStuff: {},
}
```

**Success Response**

Code: 200

**Error Response**

Code: 401

`{ body: 'Unauthorized' }`

---

### `user/v1/favorite/{id}`

Toggles a users favorited it

**POST**

**Headers**

authtoken - JWT - required

**Body**

Required

```
{
  "productID": string,
}
```

**Success Response**

Code: 200

**Error Response**

Code: 400

Missing required fields

Code: 409

User already exists
