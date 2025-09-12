import { getDescriptionById } from "../data/contentDescription";

export const getPostDescription = (post, truncate = false, length = 90) => {
  const fullDesc = post.descriptionId
    ? getDescriptionById(post.descriptionId)
    : post.description || "No description";

  return truncate ? fullDesc.slice(0, length) + "..." : fullDesc;
};
