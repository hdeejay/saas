// "use client"
// import { useUser } from "@clerk/nextjs"
// import { useEffect, useState } from "react"
// import { useSearchParams } from 'next/navigation'
// import { collection, doc, getDocs } from "firebase/firestore"
// import { db } from '@firebase'  // Make sure this path is correct
// import { useSearchParams } from "next/navigation"
// import { Container, Grid, Card, CardActionArea, CardContent, Box, Typography } from "@mui/material"

// export default function Flashcard() {
//   const { isLoaded, isSignedIn, user } = useUser()
//   const [flashcards, setFlashcards] = useState([])
//   const [flipped, setFlipped] = useState([])
//   const searchParams = useSearchParams()
//   const search = searchParams.get('id')

//   useEffect(() => {
//     async function getFlashcard() {
//       if (!search || !user) return
//       try {
//         const colRef = collection(doc(collection(db, 'users'), user.id), search)
//         const docs = await getDocs(colRef)
//         const fetchedFlashcards = []
//         docs.forEach((doc) => {
//           fetchedFlashcards.push({ id: doc.id, ...doc.data() })
//         })
//         setFlashcards(fetchedFlashcards)
//         console.log("Fetched flashcards:", fetchedFlashcards)
//       } catch (error) {
//         console.error("Error fetching flashcards:", error)
//       }
//     }
//     getFlashcard()
//   }, [ user,search])

//   const handleCardClick = (id) => {
//     setFlipped((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }))
//   }

//   if (!isLoaded || !isSignedIn) {
//     return <div>Loading...</div>
//   }

//   return (
//     <Container maxWidth="md">
//       <Grid container spacing={3} sx={{ mt: 4 }}>
//         {flashcards.map((flashcard) => (
//           <Grid item xs={12} sm={6} md={4} key={flashcard.id}>
//             <Card>
//               <CardActionArea onClick={() => handleCardClick(flashcard.id)}>
//                 <CardContent>
//                   <Box sx={{
//                     perspective: '1000px',
//                     '& > div': {
//                       transition: 'transform 0.6s',
//                       transformStyle: 'preserve-3d',
//                       position: 'relative',
//                       width: '100%',
//                       height: '200px',
//                       boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
//                       transform: flipped[flashcard.id] ? 'rotateY(180deg)' : 'rotateY(0deg)',
//                     },
//                     '& > div > div': {
//                       position: 'absolute',
//                       width: '100%',
//                       height: '100%',
//                       backfaceVisibility: 'hidden',
//                       display: 'flex',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       padding: 2,
//                       boxSizing: 'border-box',
//                     },
//                     '& > div > div:nth-of-type(2)': {
//                       transform: 'rotateY(180deg)'
//                     },
//                   }}>
//                     <div>
//                       <div>
//                         <Typography variant="h5" component="div">
//                           {flashcard.front}
//                         </Typography>
//                       </div>
//                       <div>
//                         <Typography variant="h5" component="div">
//                           {flashcard.back}
//                         </Typography>
//                       </div>
//                     </div>
//                   </Box>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   )
// }

// File: pages/flashcards/[id].js
"use client"
import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation'
import { collection, doc, getDocs } from "firebase/firestore"
import { db } from '@/firebase'
import { Container, Grid, Card, CardActionArea, CardContent, Box, Typography } from "@mui/material"

export default function Flashcard() {
  const { isLoaded, isSignedIn, user } = useUser()
  const [flashcards, setFlashcards] = useState([])
  const [flipped, setFlipped] = useState({})
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  useEffect(() => {
    async function getFlashcard() {
      if (!id || !user) return
      try {
        const colRef = collection(doc(collection(db, 'users'), user.id), id)
        const docs = await getDocs(colRef)
        const fetchedFlashcards = []
        docs.forEach((doc) => {
          fetchedFlashcards.push({ id: doc.id, ...doc.data() })
        })
        setFlashcards(fetchedFlashcards)
      } catch (error) {
        console.error("Error fetching flashcards:", error)
      }
    }
    getFlashcard()
  }, [user, id])

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  if (!isLoaded || !isSignedIn) {
    return <div>Loading...</div>
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {flashcards.map((flashcard) => (
          <Grid item xs={12} sm={6} md={4} key={flashcard.id}>
            <Card>
              <CardActionArea onClick={() => handleCardClick(flashcard.id)}>
                <CardContent>
                  <Box sx={{
                    perspective: '1000px',
                    '& > div': {
                      transition: 'transform 0.6s',
                      transformStyle: 'preserve-3d',
                      position: 'relative',
                      width: '100%',
                      height: '200px',
                      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                      transform: flipped[flashcard.id] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    },
                    '& > div > div': {
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 2,
                      boxSizing: 'border-box',
                    },
                    '& > div > div:nth-of-type(2)': {
                      transform: 'rotateY(180deg)'
                    },
                  }}>
                    <div>
                      <div>
                        <Typography variant="h6" component="div">
                          {flashcard.front}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="h6" component="div">
                          {flashcard.back}
                        </Typography>
                      </div>
                    </div>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}