import { useEffect } from "react";
import { socialMetadata } from "@/lib/seo-content";
// Language selection currently shares URLs. Keep translated metadata in sync without changing routes.
export function LocalizedSeo({title,description}:{title:string;description:string}){
 useEffect(()=>{document.title=title;for(const meta of socialMetadata(title,description)){
  if('title' in meta)continue;
  const attribute='property' in meta?'property':'name';const key='property' in meta?meta.property:meta.name;
  const existing=document.head.querySelectorAll<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if(existing.length){existing.forEach(node=>node.content=meta.content!);}else{const node=document.createElement('meta');node.setAttribute(attribute,key!);node.content=meta.content!;document.head.append(node);}
 }},[title,description]);return null;
}
