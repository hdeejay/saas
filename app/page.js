
"use client"
import Head from "next/head";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Button, Container, Toolbar, Typography, Box, Grid, Card, CardContent, CardActions } from "@mui/material";

export default function Home() {
  const handleSubmit = async () => {
    const checkoutSession = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: { origin: 'http://localhost:3000' },
    })
    const checkoutSessionJson = await checkoutSession.json()
    if (checkoutSession.statusCode===500) {
      console.error(checkoutSession.message)
      return
    }

  
    const stripe = await getStripe()
    const {error} = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    })
  
    if (error) {
      console.warn(error.message)
    }
  }
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard SAAS</title>
        <meta name="description" content="create flashcards" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SAAS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">Login</Button>
            <Button color="inherit" href="/sign-in">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          textAlign: "center",
          my: 4,
        }}
      >
        <Typography variant="h2">Welcome to SaaS</Typography>
        <Typography variant="h5">
          The easiest way to make flashcards 
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3">
                  Easy to Use
                </Typography>
                <Typography variant="body1">
                  Create flashcards in just a few clicks with our user-friendly interface.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3">
                  Cloud Storage
                </Typography>
                <Typography variant="body1">
                  Access your flashcards from anywhere with our secure cloud storage.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3">
                  Collaboration
                </Typography>
                <Typography variant="body1">
                  Share and collaborate on flashcards with friends or classmates.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3">
                  Basic
                </Typography>
                <Typography variant="h6" component="p">
                  Free
                </Typography>
                <Typography variant="body2">
                  Limited features, perfect for beginners.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" fullWidth>
                  Get Started
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3">
                  Pro
                </Typography>
                <Typography variant="h6" component="p">
                  $9.99/month
                </Typography>
                <Typography variant="body2">
                  Full access to all features and priority support.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                  Get Pro
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3">
                  Enterprise
                </Typography>
                <Typography variant="h6" component="p">
                  $29.99/month
                </Typography>
                <Typography variant="body2">
                  Advanced features for teams and organizations.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" fullWidth>
                  Contact Sales
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
