"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "./ui/skeleton";
import FileComp from "./FileComp";

const MyFiles = () => {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);

  const getFiles = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/files");
      setFiles(response.data.files);
      console.log(files);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getFiles();
  }, []);

  return <main>{loading 
    ? 
  <main className=" gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <Skeleton  className="w-full h-[150px] bg-slate-300/70"/>
    <Skeleton  className="w-full h-[150px] bg-slate-300/70"/>
    <Skeleton  className="w-full h-[150px] bg-slate-300/70"/>
  </main> 
  : <main>
    {
        files.length === 0 ?<section className="w-full h-full flex items-center justify-center">
            <h2 className="text-muted-foreground">No documents uploaded !</h2>
        </section> : <section className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {files.map((file)=>(
                <FileComp file={file}/>
            ))}
        </section>
    }
  </main>
  }</main>;
};

export default MyFiles;
