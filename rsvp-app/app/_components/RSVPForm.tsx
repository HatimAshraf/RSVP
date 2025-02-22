'use client';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Toaster } from '@/components/ui/sonner';
import { MapPin } from 'lucide-react';
import { useState } from 'react';

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [accompany, setAccompany] = useState<string | null>(null);
  const [attendance, setAttendance] = useState('yes');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = () => {
    console.log('submit');
  };

  return (
    <div className='max-w-md my-10 mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>TITLE</h1>
      <p className='mb-6'>DESC</p>
      <div className='mb-6'>
        <Label>DETAILS</Label>
        <p>DATE</p>
        <div className='mt-4'>
          <Button>
            <MapPin className='w-full' />
            <span>LOCATION</span>
          </Button>
        </div>
      </div>
      <form onSubmit={handleFormSubmit} className='space-y-6'>
        <div>
          <Label htmlFor='name'>NAME</Label>
          <Input
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && (
            <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
          )}
        </div>
        <div>
          <Label htmlFor='email'>EMAIL</Label>
          <Input
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && (
            <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
          )}
        </div>
        <div>
          <Label htmlFor='accompany'>ACCOMPANY</Label>
          <Input
            id='accompnay'
            type='number'
            min='0'
            value={accompany || ''}
            onChange={(e) => setAccompany(e.target.value)}
          />
        </div>
        <div>
          <Label>rsvp label</Label>
          <RadioGroup value={attendance} onValueChange={setAttendance}>
            <div className='flex space-x-2 items-center'>
              <RadioGroupItem value='yes' id='yes' />
              <Label htmlFor='yes'>Yes</Label>
            </div>
            <div className='flex space-x-2 items-center'>
              <RadioGroupItem value='no' id='no ' />
              <Label htmlFor='no'>No</Label>
            </div>
          </RadioGroup>
        </div>
        <Button type='submit' disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
};

export default RSVPForm;
