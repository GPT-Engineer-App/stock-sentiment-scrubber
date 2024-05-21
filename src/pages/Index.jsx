import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, Box, HStack, IconButton, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import { FaSearch, FaBullhorn, FaArrowDown } from "react-icons/fa";

const Index = () => {
  const [ticker, setTicker] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    setResults(null);

    // Mocking the API call
    setTimeout(() => {
      setLoading(false);
      setResults({
        sentiment: "bullish", // or 'bearish'
        performance: 5.2, // percentage change
      });
    }, 2000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">WallStreetBets DD Analyzer</Text>
        <HStack width="100%">
          <Input placeholder="Enter Stock Ticker" value={ticker} onChange={(e) => setTicker(e.target.value)} />
          <IconButton aria-label="Search" icon={<FaSearch />} onClick={handleSearch} />
        </HStack>
        {loading && <Spinner />}
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        {results && (
          <Box p={4} borderWidth="1px" borderRadius="lg" width="100%">
            <HStack spacing={4}>
              <Text fontSize="lg">Sentiment:</Text>
              {results.sentiment === "bullish" ? (
                <HStack>
                  <FaBullhorn color="green" />
                  <Text color="green.500">Bullish</Text>
                </HStack>
              ) : (
                <HStack>
                  <FaArrowDown color="red" />
                  <Text color="red.500">Bearish</Text>
                </HStack>
              )}
            </HStack>
            <HStack spacing={4} mt={4}>
              <Text fontSize="lg">Performance:</Text>
              <Text>{results.performance}%</Text>
            </HStack>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
