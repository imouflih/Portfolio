import {
  CollectionReference,
  DocumentData,
  Query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "./firebase";

async function getProjectByName(paramsId: string) {
  const projectsCollectionRef: CollectionReference<DocumentData> = collection(
    firestore,
    "projects"
  );
  const q: Query<DocumentData> = query(
    projectsCollectionRef,
    where("href", "==", "/my-projects/" + paramsId)
  );

  const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);

  const projectsData: Project[] = [];
  querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
    const projectData = doc.data() as Project;
    const projectID: string = doc.id;
    projectsData.push({ ...projectData, id: projectID });
  });

  return projectsData[0];
}

export default getProjectByName;
