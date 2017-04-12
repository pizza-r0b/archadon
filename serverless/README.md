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

### `user/v1/update/profile/{id}`

Updates a users profile information

**POST**


**Path Parameters**

id - User ID - required

**Headers**

authtoken - JWT - required

**Body**

Required

The `data` property is required and must contain an object. The key names within the `data` object are arbitrary, with one exception, key names cannot be numbers.

```
data: {
  {
    Address: {
      ...
    },
    StripeCustomerID: string,
    otherStuff: {},
  }
}
```

**Success Response**

Code: 200

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

---

### `product/v1/create`

Creates a product item with Name, Price, CreatedAt, CreatedBy, and ID fields. You need to specify Name and Price. The JWT used in the authtoken header must correlate to a user that has GodMode.

**POST**

**Headers**

authtoken - JWT - required (GodMode user)

**Body**

Required

```
{
  "Name": string,
  "Price": number
}
```

**Success Response**

Code: 200

A successful response will return the ID for the newly created product.

```
{
  "ID": string
}
```

---

### `product/v1/update/data/{id}`

Update a products data. GodMode user required to make successful request.

**POST**

**Path Parameters**

id - Product ID - required

**Headers**

authtoken - JWT - required (GodMode user)

**Body**

Required

```
{
  "SomeArray": [...],
  "SomeObject": {...},
  "SomeString": "...",
  "SomeNumber": 1
}
```

**Success Response**

Code: 200


---

### `product/v1/data/{id}`

Public endpoint to get the data for a single product. Strips off CreatedBy attribute.

**GET**

**Path Parameters**

id - Product ID - required

**Success Response**

Code: 200

```
{
  data: {...}
}
```
