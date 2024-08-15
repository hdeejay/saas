// "use client";
// import { Container, Box, Typography, Paper, TextField } from "@mui/material";
// import { collection, writeBatch, doc, getDoc } from "firebase/firestore"; // Fixed imports
// import { useRouter } from "next/router";
// import { useState } from "react";
// import { useUser } from "@clerk/nextjs"; // Added missing import for useUser

// export default function Generate() {
//   const { isLoaded, isSignedIn, user } = useUser();
//   const [flashcards, setFlashcards] = useState([]);
//   const [flipped, setFlipped] = useState({});
//   const [text, setText] = useState("");
//   const [name, setName] = useState("");
//   const [open, setOpen] = useState(false); // Changed from 'setOpenI' to 'setOpen'
//   const router = useRouter();

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch('/api/generate', {
//         method: 'POST',
//         headers: { 
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ text }),
//       });
//       const data = await response.json();
//       setFlashcards(data);
//     } catch (error) {
//       console.error("Error generating flashcards:", error);
//     }
//   };

//   const handleCardClick = (id) => {
//     setFlipped((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const saveFlashcards = async () => {
//     if (!name) {
//       alert('Please enter a name');
//       return;
//     }

//     const batch = writeBatch(db);
//     const userDocRef = doc(collection(db, 'users'), user.id);
//     const docSnap = await getDoc(userDocRef);
//     let collections = [];

//     if (docSnap.exists()) {
//       collections = docSnap.data().flashcards || [];
//       if (collections.find((f) => f.name === name)) {
//         alert('A flashcard collection with the same name already exists');
//         return;
//       }
//       collections.push({ name });
//     } else {
//       collections.push({ name });
//     }

//     batch.set(userDocRef, { flashcards: collections }, { merge: true });

//     const colRef = collection(userDocRef, name);
//     flashcards.forEach((flashcard) => {
//       const cardDocRef = doc(colRef);
//       batch.set(cardDocRef, flashcard);
//     });

//     await batch.commit();
//     handleClose();
//     router.push('/flashcards');
//   };

//   return (
//     <Container maxWidth="md">
//       <Box
//         sx={{
//           mt: 4,
//           mb: 6,
// //           display: 'flex',
// //           flexDirection: 'column',
// //           alignItems: 'center'
// //         }}
// //       >
// //         <Typography variant="h4">
// //           Generate Flashcards
// //         </Typography>
// //         <Paper sx={{ p: 4, width: '100%' }}>
// //           <TextField
// //             value={text}
// //             onChange={(e) => setText(e.target.value)}
// //             label="Enter Text"
// //             fullWidth
// //             multiline
// //             rows={4}
// //             variant="outlined"
// //             sx={{
// //               mb: 2,
// //             }}
// //           />
// //         </Paper>
// //       </Box>
// //     </Container>
// //   );
// // }


// "use client"; // Mark as Client Component

// import { Container, Box, Typography, Paper, TextField, Button, CardActionArea } from "@mui/material";
// import { collection, writeBatch, doc, getDoc } from "firebase/firestore"; 
// import { useRouter } from "next/navigation"; // Use from "next/navigation"
// import { useState, useEffect } from "react";
// import { useUser } from "@clerk/nextjs";
// import { transform } from "next/dist/build/swc";

// export default function Generate() {
//   const { isLoaded, isSignedIn, user } = useUser();
//   const [flashcards, setFlashcards] = useState([]);
//   const [flipped, setFlipped] = useState({});
//   const [text, setText] = useState("");
//   const [name, setName] = useState("");
//   const [open, setOpen] = useState(false);
//   const router = useRouter();

//   // useEffect(() => {
//   //   if (!isLoaded || !isSignedIn) {
//   //     router.push('/login'); // Redirect to login if user is not signed in
//   //   }
//   // }, [isLoaded, isSignedIn, router]);

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch('/api/generate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ text }),
//       });
//       const data = await response.json();
//       setFlashcards(data);
//     } catch (error) {
//       console.error("Error generating flashcards:", error);
//     }
//   };

//   const handleCardClick = (id) => {
//     setFlipped((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const saveFlashcards = async () => {
//     if (!name) {
//       alert('Please enter a name');
//       return;
//     }

//     const batch = writeBatch(db);
//     const userDocRef = doc(collection(db, 'users'), user.id);
//     const docSnap = await getDoc(userDocRef);
//     let collections = [];

//     if (docSnap.exists()) {
//       collections = docSnap.data().flashcards || [];
//       if (collections.find((f) => f.name === name)) {
//         alert('A flashcard collection with the same name already exists');
//         return;
//       }
//       collections.push({ name });
//     } else {
//       collections.push({ name });
//     }

//     batch.set(userDocRef, { flashcards: collections }, { merge: true });

//     const colRef = collection(userDocRef, name);
//     flashcards.forEach((flashcard) => {
//       const cardDocRef = doc(colRef);
//       batch.set(cardDocRef, flashcard);
//     });

//     await batch.commit();
//     handleClose();
//     router.push('/flashcards');
//   };

//   return (
//     <Container maxWidth="md">
//       <Box
//         sx={{
//           mt: 4,
//           mb: 6,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center'
//         }}
//       >
//         <Typography variant="h4">
//           Generate Flashcards
//         </Typography>
//         <Paper sx={{ p: 4, width: '100%' }}>
//           <TextField
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             label="Enter Text"
//             fullWidth
//             multiline
//             rows={4}
//             variant="outlined"
//             sx={{
//               mb: 2,
//             }}
//           />
//           <Button
//           variant = "contained"
//           color = "primary"
//           onClick={handleSubmit}
//           fullWidth
//           > 
//           {' '}
//           Submit
//           </Button>
//         </Paper>
//       </Box>
//       {flashcards.length > 0 && <Box sx {{mt:4}} >
//         <Typography variant = "h5"> flashcard preview</Typography>
//         <Grid container spacing = {3}>
//           {flashcards.map((flashcard,index)
//             <Grid item xs ={12} sm ={6} md= {4} key = {index}>
//               <Card>
//                 <CardActionArea 
//                 onClick={() => {
//                   handleCardClick(index)
                  
//                 }}
//                 >
//                   <CardContent>
//                     <Box sx = {{
//                       perspective: '1000px',
//                      '% > div': {
//                       transition: 'transform 0.6s',
//                       transformStyle: 'preserve-3d',
//                       position:'relative',
//                       width:'100%',
//                       height:'200px',
//                       boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2'),
//                       transform:flipped[index]
//                       ? 'rotateY(180deg)' 
//                       : 'rotateY(0deg)',
//                      },
//                      '% > div >div': {
//                       position:'absolute ',
//                       width:'100%',
//                       height:'200px',
//                       backfaceVisibility:'hidden'
//                      display:'flex'
//                      justifyContent:'center',
//                      alignItems: 'center'
//                      padding:2,
//                      boxSizing:'border-box'
                      
//                      },
//                      '% > div > div:nth-of-type(2)' : {
//                     transform:' rotateY(180deg)' 
//                      },
//                     }}
//                     >
//                       <div>
//                         <div>  
//                           <Typography variant="h5" component="div">
//                         {flashcard.front}
//                         </Typography>
//                         </div>
//                         </div>
//                         <div>
//                         <div> 
//                           <Typography variant="h5" component="div">
//                         {flashcard.back}
//                         </Typography>
//                         </div>
//                         </div>
//                     </Box>
//                   </CardContent>
//                 </CardActionArea>
//               </Card>
//             </Grid>

             

//           )}}
//         </Grid>
//         <Box sx={{mt:4, display:'flex', justifyContent:'center'}}>
//           <Button variant = "contained" color="secondary" onClick={handleOpen}>
//             save
//           </Button>
//       </Box>
//       <Dialog open={dialogOpen} onClose={handleCloseDialog}>
//   <DialogTitle>Save Flashcard Set</DialogTitle>
//   <DialogContent>
//     <DialogContentText>
//       Please enter a name for your flashcard set.
//     </DialogContentText>
//     <TextField
//       autoFocus
//       margin="dense"
//       label="Set Name"
//       type="text"
//       fullWidth
//       value={setName}
//       onChange={(e) => setSetName(e.target.value)}
//     />
//   </DialogContent>
//   <DialogActions>
//     <Button onClick={handleCloseDialog}>Cancel</Button>
//     <Button onClick={saveFlashcards} color="primary">
//       Save
//     </Button>
//   </DialogActions>
// </Dialog> 
//     </Container>
//   );
// }


'use client';
import { Container, Box, Typography, Paper, TextField, Button, CardActionArea, Card, CardContent, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { db } from "@/firebase";
import {doc,collection,setDoc,getDoc,writeBatch} from "firebase/firestore"
export default function Generate() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState({});
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const router = useRouter();

  // const handleSubmit = async () => {
  //   try {
  //     const response = await fetch('/api/generate', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ text }),
  //     });
  //     const data = await response.json();
  //     setFlashcards(data);
  //   } catch (error) {
  //     console.error("Error generating flashcards:", error);
  //   }
  // };
  const handleSubmit = async () => {
    try {
      setFlashcards([]); // Clear existing flashcards
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setFlashcards(data.flashcards);
    } catch (error) {
      console.error("Error generating flashcards:", error);
      alert(`Error generating flashcards: ${error.message}`);
    }
  };

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const saveFlashcards = async () => {
    if (!name) {
      alert('Please enter a name');
      return;
    }

    const batch = writeBatch(db);
    const userDocRef = doc(collection(db, 'users'), user.id);
    const docSnap = await getDoc(userDocRef);
    let collections = [];

    if (docSnap.exists()) {
      collections = docSnap.data().flashcards || [];
      if (collections.find((f) => f.name === name)) {
        alert('A flashcard collection with the same name already exists');
        return;
      }
      collections.push({ name });
    } else {
      collections.push({ name });
    }

    batch.set(userDocRef, { flashcards: collections }, { merge: true });

    const colRef = collection(userDocRef, name);
    flashcards.forEach((flashcard) => {
      const cardDocRef = doc(colRef);
      batch.set(cardDocRef, flashcard);
    });

    await batch.commit();
    handleClose();
    router.push('/flashcards');
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          mt: 4,
          mb: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography variant="h4">
          Generate Flashcards
        </Typography>
        <Paper sx={{ p: 4, width: '100%' }}>
          <TextField
            value={text}
            onChange={(e) => setText(e.target.value)}
            label="Enter Text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            sx={{
              mb: 2,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
          > 
            Submit
          </Button>
        </Paper>
      </Box>
      {flashcards.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5">Flashcard Preview</Typography>
          <Grid container spacing={3}>
            {flashcards.map((flashcard, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardActionArea 
                    onClick={() => {
                      handleCardClick(index)
                    }}
                  >
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
                          transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                        },
                        '& > div > div': {
                          position: 'absolute',
                          width: '100%',
                          height: '200px',
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
                            <Typography variant="h5" component="div">
                              {flashcard.front}
                            </Typography>
                          </div>
                        </div>
                        <div>
                          <div> 
                            <Typography variant="h5" component="div">
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
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="secondary" onClick={handleOpenDialog}>
              Save
            </Button>
          </Box>
        </Box>
      )}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Save Flashcard Set</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your flashcard set.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Set Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={saveFlashcards} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
