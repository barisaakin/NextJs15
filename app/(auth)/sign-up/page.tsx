'use client';

import AuthForm from '@/components/AuthForm';
import { signUpSchema } from '@/lib/validation';

const Page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      email: '',
      password: '',
      fullName: '',
      universityId: 0,
    }}
    onSubmit={() => {}}
  />
);

export default Page;
