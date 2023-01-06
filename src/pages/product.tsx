import { HeadFC } from "gatsby";
import React from "react";
import { MasterPage } from "../components/layout/MasterPage";
import { GetPosts } from "../gql/GetPosts";


export default function Product() 
{
  const posts = GetPosts();
  const introPost = posts.find(post => post.title === "Introductie")

  return (<MasterPage children={[() =>(<>{introPost?.title}</>)]} />)
}

