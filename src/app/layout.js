import * as React from 'react';
import Box from '@mui/material/Box';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Drawer from '@/components/Drawer';
import { layoutStyles as styles } from '@/styles/layoutStyles';
import { ProductProvider } from '@/context/product';
import { Toaster } from 'sonner'
import Loading from '@/components/Loading'
import { LoadingProvider } from '@/context/loading';

export const metadata = {
  title: 'Point of sale ',
  description: 'Point of sale ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster richColors />
        <LoadingProvider>

          <ProductProvider>
            <ThemeRegistry>
              <Loading />
              <Drawer />
              <Box
                component="main"
                sx={styles.layoutBox}>
                {children}
              </Box>

            </ThemeRegistry>
          </ProductProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
