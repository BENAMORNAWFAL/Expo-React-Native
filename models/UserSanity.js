import sanityClient from '@sanity/client';

// Initialize Sanity client
const client = sanityClient({
  projectId: 'your_project_id', // Replace with your project ID
  dataset: 'your_dataset', // Replace with your dataset name
  useCdn: true, // Use CDN for faster response times (true for production, false for real-time updates)
});

// Function to fetch users with pagination
export const fetchUsers = async (page = 1, limit = 20) => {
  const query = `*[_type == "user"] | order(createdAt desc) [${(page - 1) * limit}...${page * limit}] {
    _id,
    name,
    phone,
    email
  }`;
  return await client.fetch(query);
};

// Function to create a new user
export const createUser = async (userData) => {
  try {
    const newUser = await client.create({
      _type: 'user',
      ...userData,
      createdAt: new Date().toISOString(), // Add creation timestamp
    });
    return newUser;
  } catch (error) {
    throw new Error('Error creating user: ' + error.message);
  }
};
