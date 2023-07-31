import {
  CollectionReference,
  DocumentData,
  QueryDocumentSnapshot,
  QuerySnapshot,
  collection,
  getDocs,
} from "firebase/firestore";
import { firestore } from "./firebase";

async function getProjectsData() {
  const projectsCollectionRef: CollectionReference<DocumentData> = collection(
    firestore,
    "projects"
  );
  const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
    projectsCollectionRef
  );

  const projectsData: Project[] = [];
  querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
    const projectData = doc.data() as Project;
    const projectID: string = doc.id;
    projectsData.push({ ...projectData, id: projectID });
  });

  return projectsData;
}

export default getProjectsData;
