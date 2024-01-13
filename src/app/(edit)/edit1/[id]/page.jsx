import EditForm1 from "@/components/courses/(100)/EditForm1";
import getSingleCourse from "@/course-fetch/level1/getSingleCourse";

export default async function page({ params: { id } }) {
  const user = await getSingleCourse(id);
  const { code, title, description, name, position, specializes, email, phone, image } = user;
  return (
    <>
      <EditForm1
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
