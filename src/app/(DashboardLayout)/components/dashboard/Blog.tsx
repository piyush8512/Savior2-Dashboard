
import Link from "next/link";
import {
  CardContent,
  Typography,
  Grid,
  Rating,
  Tooltip,
  Fab,
  Avatar
} from "@mui/material";
// import img1 from "public/images/products/s4.jpg";
// import img2 from "public/images/products/s5.jpg";
// import img3 from "public/images/products/s7.jpg";
// import img4 from "public/images/products/s11.jpg";
import { Stack } from "@mui/system";
import { IconBasket } from "@tabler/icons-react";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";
import Image from "next/image";

const ecoCard = [
  {
    title: "RoofTop Solution ",
    subheader: "September 14, 2023",
    photo: '/images/products/s4.jpg',
   
    price: 285,
    rating: 4,
  },
  {
    title: "Solar Water Heater",
    subheader: "September 14, 2023",
    photo: '/images/products/s5.jpg',
    
    price: 900,
    rating: 5,
  },
  {
    title: "PV module",
    subheader: "September 14, 2023",
    photo: '/images/products/s7.jpg',
   
    price: 200,
    rating: 3,
  },  
  {
    title: "TopCon Module",
    subheader: "September 14, 2023",
    photo: '/images/products/s11.jpg',
    
    price: 345,
    rating: 2,
  },
];

const Blog = () => {
  return (
    <Grid container spacing={3}>
      {ecoCard.map((product, index) => (
        <Grid item xs={12} md={4} lg={3} key={index}>
          <BlankCard>
            <Typography component={Link} href="/">
              <Avatar
                src={product.photo} variant="square"
                sx={{
                  height: 250,
                  width: '100%',
                }}
                
              />
            </Typography>
            
            <CardContent sx={{ p: 3, pt: 2 }}>
              <Typography variant="h6">{product.title}</Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mt={1}
              >
                <Stack direction="row" alignItems="center">
                  <Typography variant="h6">₹{product.price}</Typography>
                  <Typography
                    color="textSecondary"
                    ml={1}
                    sx={{ textDecoration: "line-through" }}
                  >
                    {/* ${product.salesPrice} */}
                  </Typography>
                </Stack>
                <Rating
                  name="read-only"
                  size="small"
                  value={product.rating}
                  readOnly
                />
              </Stack>
            </CardContent>
          </BlankCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Blog;
