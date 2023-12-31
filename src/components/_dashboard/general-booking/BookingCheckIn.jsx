// material
import { styled } from '@mui/material/styles';
import { Card, Typography, Box } from '@mui/material';
// utils
import { fShortenNumber } from 'src/utils/formatNumber';
//
import { CheckInIllustration } from 'src/assets';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 2, 2, 3)
}));

// ----------------------------------------------------------------------

const TOTAL = 311000;

export default function BookingCheckIn() {
  return (
    <RootStyle>
      <div>
        <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
          Tổng giá trị
        </Typography>
      </div>
      <Box
        sx={{
          width: 120,
          height: 120,
          lineHeight: 0,
          borderRadius: "50%",
          bgcolor: "background.neutral",

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography>
      </Box>
    </RootStyle>
  );
}
