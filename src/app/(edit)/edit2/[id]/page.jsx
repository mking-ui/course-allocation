
import EditForm2 from "@/components/courses/(200)/EditForm2";
import getSingleCourse from "@/course-fetch/level2/getSingleCourse";

export default async function page({ params: { id } }) {
  const user = await getSingleCourse(id);
  const { code, title, description, name, position, specializes, email, phone, image } = user;
  return (
    <>
      <EditForm2
        id={id}
        code={code}
        title={title}
        description={description}
        name={name}
        position={position}
        specializes={specializes}
        email={email}
        phone={phone}
        image={image}
      />
    </>
  );
}
