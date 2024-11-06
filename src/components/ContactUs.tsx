import emailjs from '@emailjs/browser';
import '@fontsource/permanent-marker';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Container, Snackbar, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react';

const EmailContactForm = () => {
  const form = useRef();
  const [message, setMessage] = React.useState<string | undefined>(undefined);

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('service_8321cqv', 'template_440uze4', form.current, '1afItGsg7LU_g73tM')
      .then((_result) => {
        const submit = document.getElementById('submit');
        setMessage('Message sent!');
        (submit as HTMLButtonElement).disabled = true;
      }, (_error) => {
        const submit = document.getElementById('submit');
        setMessage('Failed to send message. Please try again or contact us directly at sps@lycoming.edu.');
        (submit as HTMLButtonElement).disabled = true;
      });
  };

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}>
        <Box
          sx={{
            background: 'rgba(24, 26, 27, 0.75)',
            padding: 3,
            borderRadius: 2,
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <Typography variant="h3" id="contact-us" color='textPrimary'>Contact Us</Typography>
            <Typography variant="body1">Send a message to the executive board of the Lycoming College Society of Physics Students:</Typography>
            <TextField
              label="Your Name"
              name="from_name"
              fullWidth
              margin="normal"
              size='medium'
              required
            />
            <TextField
              label="Your Email"
              name="reply_to"
              fullWidth
              margin="normal"
              type="email"
              required
            />
            <TextField
              label="Your Message"
              name="message"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              required
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size='large'
              id="submit"
              sx={{ marginTop: 2 }}
              fullWidth
              endIcon={<SendIcon />}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Container>

      <Snackbar
        open={message !== undefined}
        autoHideDuration={4000}
        onClose={() => setMessage(undefined)}
        message={message}
      />
    </>
  );
};

export default EmailContactForm;