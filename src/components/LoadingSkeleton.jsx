// LoadingSkeleton.jsx
import { Button, Flex, Skeleton, Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const LoadingSkeleton = ({ count }) => {
  return (
    <>
      <div className="skelton bg-slate-400 rounded  max-w-[500px] h-[450px]  items-center flex justify-center flex-col gap-4">
        <Stack px={"30px"}>
          <Skeleton height="50px" mb={"30px"} width={"400px"}  />

          <Skeleton height="30px" p={"10px"} width={"400px"} />
          <Skeleton height="30px" p={"10px"} width={"400px"} />
          <Skeleton height="30px" p={"10px"} width={"400px"} />
          <Skeleton height="30px" p={"10px"} width={"400px"} />

          <Flex justifyContent={"space-between"} mt={"30px"} px={"20px"}>
            <Skeleton height="25px" width="80px" p={'20px'} rounded={'10px'}/>
            <Skeleton height="25px" width="80px" p={'20px'} rounded={'10px'}/>
          </Flex>
        </Stack>
        <Link to="/">
          <Button
            colorScheme="blue"
            textAlign={"center"}
            width={"fit-content"}
            mx={"auto"}
          >
            Go Home
          </Button>
        </Link>
             <a href="/" className=" text-red-700 text-sm pb-2">Some think wrong </a>
      </div>
    </>
  );
};

export default LoadingSkeleton;
