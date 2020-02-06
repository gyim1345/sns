import React from "react";
import { fetchPosts } from "../taskService"

export const Test = async () => {
 try {
   return await fetchPosts();
   //  console.log(thisPost)
  } catch (e){
    console.log(e);
  }
}
