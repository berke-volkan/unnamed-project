import { Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useUser } from '@clerk/clerk-expo'
import Colors from '@/constants/Colors'

const mock_books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    borrowedDate: "2025-06-01",
    returnDate: "2025-06-15",
    libCode:"TR-IST-HS-KAD-0345",
    returned: false,
  },
  {
    title: "1984",
    author: "George Orwell",
    borrowedDate: "2025-05-20",
    returnDate: "2025-06-03",
    libCode:"TR-GAZ-HS-SAH-0847",
    returned: true,
  },
];

const library = () => {
  const { user } = useUser()
  const libId: any = user?.unsafeMetadata["libid"]
  const libScore: any = user?.unsafeMetadata["libScore"]

  return (
    <ScrollView>
      <View style={{ backgroundColor: Colors.primaryMuted, alignSelf: "center", marginTop: 10, marginBottom: 10, borderRadius: 10, width: "90%" }}>
        <Image style={{ alignSelf: "center", marginTop: 10 }} src={user?.imageUrl} width={90} height={90} borderRadius={15} blurRadius={25} />
        <Text style={{ textAlign: "center", fontSize: 26, fontWeight: "bold" }}>{user?.fullName}</Text>
        <Text style={{ marginLeft: 10, fontSize: 23 }}>LibID: {libId}</Text>
        <Text style={{ marginLeft: 10, fontSize: 23 }}>LibScore: %{libScore}</Text>
      </View>

      {/* Explanation block integrated */}
      <View style={{ margin: 15, padding: 10, backgroundColor: "#f0f0f0", borderRadius: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>Library Terms Explained</Text>

        <View style={{ marginBottom: 8 }}>
          <Text style={{ fontWeight: "600" }}>LibID</Text>
          <Text>Your unique Library ID. It identifies your personal account in the system.</Text>
        </View>

        <View style={{ marginBottom: 8 }}>
          <Text style={{ fontWeight: "600" }}>LibCode</Text>
          <Text>A code representing the book’s city, school type, district, and unique ID.</Text>
        </View>

        <View>
          <Text style={{ fontWeight: "600" }}>LibScore</Text>
          <Text>Your library score, showing how active and responsible you are with borrowed books and library activities.</Text>
        </View>
      </View>

      <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Borrowed Books:</Text>
      {mock_books.map((book, index) => (
        <View key={index} style={{ backgroundColor: "#90EE90", borderRadius: 5, width: "85%", alignSelf: "center", marginBottom: 5 }}>
          <Text style={{ textAlign: "center", fontSize: 26, fontWeight: "bold" }}>{book.title}</Text>
          <Text style={{ marginRight: 5, marginLeft: 5, fontSize: 18 }}>Author: {book.author}</Text>
          <Text style={{ marginRight: 5, marginLeft: 5, fontSize: 18 }}>LibCode: {book.libCode}</Text>
          <Text style={{ textAlign: "right", marginRight: 15 }}>Borrowed: {book.borrowedDate}</Text>
          <Text style={{ textAlign: "right", marginRight: 15 }}>Return: {book.returnDate}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default library
