import { useForm } from 'react-hook-form';
function MapForm() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d387521.0648249189!2d-73.928554!3d40.640724!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1666245358517!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      
    </div>
  );
}

export default MapForm;
