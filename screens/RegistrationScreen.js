// import { View, TextInput, Button, Alert } from 'react-native';
// import { createClient, createUser } from './sanity';
// import React from 'react'

// export default function RegistrationScreen() {
//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');
  
//     const handleRegister = async () => {
//       try {
//         // Sanity client setup
//         const client = createClient(); // Implement createClient function to initialize Sanity client
  
//         // Create user document
//         const newUser = { name, phone };
//         const response = await createUser(client, newUser); // Implement createUser function to create a new user document
  
//         if (response?._id) {
//           Alert.alert('Registration Successful', 'User registered successfully.');
//           // Optionally, navigate to login or home screen
//         } else {
//           Alert.alert('Registration Failed', 'Failed to register user. Please try again.');
//         }
//       } catch (error) {
//         console.error('Error registering user:', error);
//         Alert.alert('Registration Failed', 'Failed to register user. Please try again.');
//       }
//     };
  
//     return (
//       <View>
//         <TextInput
//           placeholder="Name"
//           value={name}
//           onChangeText={(text) => setName(text)}
//         />
//         <TextInput
//           placeholder="Phone Number"
//           value={phone}
//           onChangeText={(text) => setPhone(text)}
//           keyboardType="phone-pad"
//         />
//         <Button title="Register" onPress={handleRegister} />
//       </View>
//     );
// }