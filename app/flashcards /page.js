// 'use client';
// import { useUser } from "@clerk/nextjs";
// import { useEffect, useState } from "react";
// import { collection, doc, getDoc, setDoc } from "firebase/firestore";
// import { db } from '@firestore';
// import { useRouter } from "next/navigation";
// import { Box, Card, CardContent, Container, Grid, Typography, CardActionArea } from "@mui/material";

// export default function Flashcard() {
//   const { isLoaded, isSignedIn, user } = useUser();
//   const [flashcards, setFlashcards] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     async function getFlashcards() {
//       console.log("getFlashcards called, user:", user);
//       if (!user) return;
//       try {
//         const docRef = doc(collection(db, 'users'), user.id);
//         console.log("Fetching document for user ID:", user.id);
//         const docSnap = await getDoc(docRef);
//         console.log("Document snapshot:", docSnap.exists() ? "exists" : "does not exist");
//         if (docSnap.exists()) {
//           const collections = docSnap.data().flashcards || [];
//           console.log("Fetched flashcards:", collections);
//           setFlashcards(collections);
//         } else {
//           console.log("Creating new user document");
//           await setDoc(docRef, { flashcards: [] });
//           setFlashcards([]);
//         }
//       } catch (error) {
//         console.error("Error fetching flashcards:", error);
//       }
//     }
//     getFlashcards();
//   }, [user]);

//   const handleCardClick = (name) => {
//     router.push(`/flashcard?name=${name}`);
//   };

//   console.log("Rendering component, flashcards:", flashcards);

//   if (!isLoaded || !isSignedIn) {
//     return <Box>Loading...</Box>;
//   }

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
//         Your Flashcard Sets
//       </Typography>
//       {flashcards.length === 0 ? (
//         <Typography>You don't have any flashcard sets yet.</Typography>
//       ) : (
//         <Grid container spacing={3} sx={{ mt: 2 }}>
//           {flashcards.map((flashcard, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card>
//                 <CardActionArea onClick={() => handleCardClick(flashcard.name)}>
//                   <CardContent>
//                     <Typography variant="h5" component="div">
//                       {flashcard.name}
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Container>
//   );
// }





// File: pages/flashcards/index.js
// 'use client';
// import { useUser } from "@clerk/nextjs";
// import { useEffect, useState } from "react";
// import { collection, doc, getDoc, setDoc } from "firebase/firestore";
// import { db } from '@/firebase';
// import { useRouter } from "next/navigation";
// import { Box, Card, CardContent, Container, Grid, Typography, CardActionArea } from "@mui/material";

// export default function Flashcard() {
//   const { isLoaded, isSignedIn, user } = useUser();
//   const [flashcards, setFlashcards] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     async function getFlashcards() {
//       if (!user) return;
//       try {
//         const docRef = doc(collection(db, 'users'), user.id);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           const collections = docSnap.data().flashcards || [];
//           setFlashcards(collections);
//         } else {
//           await setDoc(docRef, { flashcards: [] });
//           setFlashcards([]);
//         }
//       } catch (error) {
//         console.error("Error fetching flashcards:", error);
//       }
//     }
//     getFlashcards();
//   }, [user]);

//   const handleCardClick = (name) => {
//     router.push(`/flashcards/${name}`);
//   };

//   if (!isLoaded || !isSignedIn) {
//     return <Box>Loading...</Box>;
//   }

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
//         Your Flashcard Sets
//       </Typography>
//       {flashcards.length === 0 ? (
//         <Typography>You don't have any flashcard sets yet.</Typography>
//       ) : (
//         <Grid container spacing={3} sx={{ mt: 2 }}>
//           {flashcards.map((flashcard, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card>
//                 <CardActionArea onClick={() => handleCardClick(flashcard.name)}>
//                   <CardContent>
//                     <Typography variant="h5" component="div">
//                       {flashcard.name}
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Container>
//   );
// }





// "use client";

// import { useUser } from "@clerk/nextjs";
// import { useEffect, useState } from "react";
// import { collection, doc, getDoc } from "firebase/firestore";
// import { db } from '@/firebase';
// import { useRouter } from "next/navigation";
// import { Box, Card, CardContent, Container, Grid, Typography, CardActionArea } from "@mui/material";

// export default function Flashcards() {
//   const { isLoaded, isSignedIn, user } = useUser();
//   const [flashcardSets, setFlashcardSets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     async function getFlashcardSets() {
//       if (!user) return;
//       try {
//         setLoading(true);
//         const userDocRef = doc(collection(db, 'users'), user.id);
//         const userDocSnap = await getDoc(userDocRef);
        
//         if (userDocSnap.exists()) {
//           const userData = userDocSnap.data();
//           const sets = userData.flashcards || [];
//           console.log("Fetched flashcard sets:", sets);
//           setFlashcardSets(sets);
//         } else {
//           console.log("No flashcard sets found for user");
//           setFlashcardSets([]);
//         }
//       } catch (error) {
//         console.error("Error fetching flashcard sets:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     if (isLoaded && isSignedIn) {
//       getFlashcardSets();
//     }
//   }, [isLoaded, isSignedIn, user]);

//   const handleCardClick = (name) => {
//     router.push(`/flashcards/${encodeURIComponent(name)}`);
//   };

//   if (!isLoaded || !isSignedIn) {
//     return <Box>Loading...</Box>;
//   }

//   if (loading) {
//     return <Box>Loading flashcard sets...</Box>;
//   }

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
//         Your Flashcard Sets
//       </Typography>
//       {flashcardSets.length === 0 ? (
//         <Typography>You don't have any flashcard sets yet.</Typography>
//       ) : (
//         <Grid container spacing={3} sx={{ mt: 2 }}>
//           {flashcardSets.map((set, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card>
//                 <CardActionArea onClick={() => handleCardClick(set.name)}>
//                   <CardContent>
//                     <Typography variant="h5" component="div">
//                       {set.name}
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Container>
//   );
// }







// "use client";

// import { useUser } from "@clerk/nextjs";
// import { useEffect, useState } from "react";
// import { collection, doc, getDoc } from "firebase/firestore";
// import { db } from '@/firebase';
// import Link from 'next/link';
// import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";

// export default function FlashcardsPage() {
//   const { isLoaded, isSignedIn, user } = useUser();
//   const [flashcardSets, setFlashcardSets] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function getFlashcardSets() {
//       if (!user)  {
//         console.log("No user, skipping flashcard fetch");
//         return;
//       }
        
//       try {
//         setLoading(true);
//         const userDocRef = doc(collection(db, 'users'), user.id);
//         const userDocSnap = await getDoc(userDocRef);
        
//         if (userDocSnap.exists()) {
//           const userData = userDocSnap.data();
//           const sets = userData.flashcards || [];
//           console.log("Fetched flashcard sets:", sets);
//           setFlashcardSets(sets);
//         } else {
//           console.log("No flashcard sets found for user");
//           setFlashcardSets([]);
//         }
//       } catch (error) {
//         console.error("Error fetching flashcard sets:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     if (isLoaded && isSignedIn) {
//       getFlashcardSets();
//     }
//   }, [isLoaded, isSignedIn, user]);

//   if (!isLoaded || !isSignedIn) {
//     return <Box>Loading...</Box>;
//   }

//   if (loading) {
//     return <Box>Loading flashcard sets...</Box>;
//   }

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
//         Your Flashcard Sets
//       </Typography>
//       {flashcardSets.length === 0 ? (
//         <Typography>You don't have any flashcard sets yet.</Typography>
//       ) : (
//         <Grid container spacing={3} sx={{ mt: 2 }}>
//           {flashcardSets.map((set, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card>
//                 <Link href={`/flashcards/${encodeURIComponent(set.name)}`} passHref>
//                   <CardContent>
//                     <Typography variant="h5" component="div">
//                       {set.name}
//                     </Typography>
//                   </CardContent>
//                 </Link>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Container>
//   );
// }








"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from '@/firebase';
import Link from 'next/navigation';
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";

export default function FlashcardsPage() {
  console.log("FlashcardsPage component rendered");
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcardSets, setFlashcardSets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect triggered", { isLoaded, isSignedIn, user });
    async function getFlashcardSets() {
      if (!user) {
        console.log("No user, skipping flashcard fetch");
        return;
      }
      console.log("Fetching flashcards for user:", user.id);
      try {
        setLoading(true);
        const userDocRef = doc(collection(db, 'users'), user.id);
        console.log("Fetching document for user:", user.id);
        const userDocSnap = await getDoc(userDocRef);
        
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          console.log("User data:", userData);
          const sets = userData.flashcards || [];
          console.log("Fetched flashcard sets:", sets);
          setFlashcardSets(sets);
        } else {
          console.log("No user document found");
          setFlashcardSets([]);
        }
      } catch (error) {
        console.error("Error fetching flashcard sets:", error);
      } finally {
        setLoading(false);
      }
    }

    if (isLoaded && isSignedIn) {
      getFlashcardSets();
    } else {
      console.log("User not loaded or not signed in", { isLoaded, isSignedIn });
    }
  }, [isLoaded, isSignedIn, user]);

  console.log("Render state:", { isLoaded, isSignedIn, loading, flashcardSets });

  if (!isLoaded || !isSignedIn) {
    return <Box>Loading user data...</Box>;
  }

  if (loading) {
    return <Box>Loading flashcard sets...</Box>;
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        
        Your Flashcard Sets
      </Typography>
      {flashcardSets.length === 0 ? (
        <Typography>You don't have any flashcard sets yet.</Typography>
      ) : (
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {flashcardSets.map((set, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <Link href={`/flashcards/${encodeURIComponent(set.name)}`} passHref>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {set.name}
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}


