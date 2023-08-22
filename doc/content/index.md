## Learning Project ECOM

This doc will be updated as the project grows.

**Products**
User should be able to add the following for a given product:

1. Name.
2. Description.
3. Inventory.
4. Images.
5. Primary Image.

Note: Product variant implementation will be done later.

**Order**
Every order will be a collection of line items. Every line item will hold products and inventory data.
Every product should have the following:

1. Creation time.
2. Last updated.
3. Customer
4. Shipping Information: a simple text description will be used for now.
5. List of line items.
6. Payment Status
7. Fullfillment status

**Line item**

1. Product
2. Quantity
3. Price

**Cart**
To be implemented.

### Repository Structure

**pnpm** will be used as the package manager.

File structure:

1. admin: Frontend of the admin dashboard.
2. adminApi: adminApi used by the frontend.
3. database: postgress database setup.
4. doc: This doc

## Admin API requirements 1st
