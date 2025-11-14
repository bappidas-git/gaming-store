import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  ArrowForward,
} from "@mui/icons-material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import useSound from "../../hooks/useSound";
import styles from "./Footer.module.css";

const Footer = () => {
  const navigate = useNavigate();
  const { play } = useSound();
  const [email, setEmail] = useState("");

  const handleNavigate = (path) => {
    play();
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    play();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };

  const footerLinks = {
    products: [
      { title: "Mobile Games", path: "/products?category=mobile-game" },
      { title: "PC Games", path: "/products?category=pc-game" },
      { title: "Console Games", path: "/products?category=console" },
      { title: "Gift Cards", path: "/gift-cards" },
      { title: "Top Up", path: "/top-up" },
      { title: "Special Offers", path: "/products?filter=discount" },
    ],
    company: [
      { title: "About Us", path: "/about" },
      { title: "Careers", path: "/careers" },
      { title: "Blog", path: "/blog" },
      { title: "Press Kit", path: "/press" },
      { title: "Partners", path: "/partners" },
    ],
    support: [
      { title: "Help Center", path: "/help" },
      { title: "Contact Us", path: "/contact" },
      { title: "Track Order", path: "/track-order" },
      { title: "Returns", path: "/returns" },
      { title: "FAQs", path: "/faq" },
    ],
    legal: [
      { title: "Privacy Policy", path: "/privacy" },
      { title: "Terms of Service", path: "/terms" },
      { title: "Cookie Policy", path: "/cookies" },
      { title: "Refund Policy", path: "/refund" },
    ],
  };

  const socialLinks = [
    { icon: <Facebook />, url: "https://facebook.com", color: "#1877f2" },
    { icon: <Twitter />, url: "https://twitter.com", color: "#1da1f2" },
    { icon: <Instagram />, url: "https://instagram.com", color: "#e4405f" },
    { icon: <YouTube />, url: "https://youtube.com", color: "#ff0000" },
    { icon: <LinkedIn />, url: "https://linkedin.com", color: "#0a66c2" },
  ];

  const paymentMethods = [
    "logos:visa",
    "logos:mastercard",
    "logos:paypal",
    "logos:apple-pay",
    "logos:google-pay",
    "cryptocurrency:btc",
  ];

  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <Box className={styles.newsletterSection}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box className={styles.newsletterContent}>
                  <Icon
                    icon="mdi:email-newsletter"
                    className={styles.newsletterIcon}
                  />
                  <Box>
                    <Typography variant="h5" className={styles.newsletterTitle}>
                      Subscribe to Our Newsletter
                    </Typography>
                    <Typography className={styles.newsletterSubtitle}>
                      Get the latest deals, updates, and gaming news delivered
                      to your inbox!
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.newsletterInput}
                    InputProps={{
                      endAdornment: (
                        <Button
                          type="submit"
                          variant="contained"
                          className={styles.subscribeButton}
                          endIcon={<ArrowForward />}
                        >
                          Subscribe
                        </Button>
                      ),
                    }}
                  />
                </form>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Main Footer Content */}
      <Box className={styles.mainFooter}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Company Info */}
            <Grid item xs={12} md={4} lg={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={styles.companySection}
              >
                <Box className={styles.logoSection}>
                  <Icon
                    icon="ion:game-controller"
                    className={styles.footerLogo}
                  />
                  <Typography variant="h5" className={styles.brandName}>
                    GameHub
                  </Typography>
                </Box>
                <Typography className={styles.companyDescription}>
                  Your ultimate destination for gaming top-ups, gift cards, and
                  the latest game releases. Fast, secure, and reliable.
                </Typography>
                <Box className={styles.contactInfo}>
                  <Box className={styles.contactItem}>
                    <Email className={styles.contactIcon} />
                    <Typography>support@gamehub.com</Typography>
                  </Box>
                  <Box className={styles.contactItem}>
                    <Phone className={styles.contactIcon} />
                    <Typography>+1 (555) 123-4567</Typography>
                  </Box>
                  <Box className={styles.contactItem}>
                    <LocationOn className={styles.contactIcon} />
                    <Typography>123 Gaming Street, CA 94102</Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* Products Links */}
            <Grid item xs={6} sm={6} md={2} lg={2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Typography variant="h6" className={styles.footerColumnTitle}>
                  Products
                </Typography>
                <Box className={styles.footerLinks}>
                  {footerLinks.products.map((link) => (
                    <MuiLink
                      key={link.title}
                      component="button"
                      onClick={() => handleNavigate(link.path)}
                      className={styles.footerLink}
                    >
                      {link.title}
                    </MuiLink>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Company Links */}
            <Grid item xs={6} sm={6} md={2} lg={2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography variant="h6" className={styles.footerColumnTitle}>
                  Company
                </Typography>
                <Box className={styles.footerLinks}>
                  {footerLinks.company.map((link) => (
                    <MuiLink
                      key={link.title}
                      component="button"
                      onClick={() => handleNavigate(link.path)}
                      className={styles.footerLink}
                    >
                      {link.title}
                    </MuiLink>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Support Links */}
            <Grid item xs={6} sm={6} md={2} lg={2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Typography variant="h6" className={styles.footerColumnTitle}>
                  Support
                </Typography>
                <Box className={styles.footerLinks}>
                  {footerLinks.support.map((link) => (
                    <MuiLink
                      key={link.title}
                      component="button"
                      onClick={() => handleNavigate(link.path)}
                      className={styles.footerLink}
                    >
                      {link.title}
                    </MuiLink>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Legal Links */}
            <Grid item xs={6} sm={6} md={2} lg={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography variant="h6" className={styles.footerColumnTitle}>
                  Legal
                </Typography>
                <Box className={styles.footerLinks}>
                  {footerLinks.legal.map((link) => (
                    <MuiLink
                      key={link.title}
                      component="button"
                      onClick={() => handleNavigate(link.path)}
                      className={styles.footerLink}
                    >
                      {link.title}
                    </MuiLink>
                  ))}
                </Box>

                {/* Social Media */}
                <Box className={styles.socialSection}>
                  <Typography variant="h6" className={styles.socialTitle}>
                    Follow Us
                  </Typography>
                  <Box className={styles.socialIcons}>
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconButton
                          className={styles.socialIcon}
                          style={{ "--social-color": social.color }}
                          onClick={() => {
                            play();
                            window.open(social.url, "_blank");
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider className={styles.divider} />

      {/* Bottom Footer */}
      <Box className={styles.bottomFooter}>
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography className={styles.copyright}>
                © {new Date().getFullYear()} GameHub. All rights reserved.
                Built with <span className={styles.heart}>e</span> for gamers
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={styles.paymentMethods}>
                <Typography className={styles.paymentTitle}>
                  We Accept:
                </Typography>
                <Box className={styles.paymentIcons}>
                  {paymentMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className={styles.paymentIcon}
                    >
                      <Icon icon={method} />
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Scroll to Top Button */}
      <motion.div
        className={styles.scrollTopButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          play();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Icon icon="mdi:arrow-up" />
      </motion.div>
    </footer>
  );
};

export default Footer;
