'use client';
import { content } from '../utils/content';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { MapPin } from 'lucide-react';
import { useState } from 'react';
import { submitRSVP } from '../actions/submitRSVP';
import { toast } from 'sonner';
import { eventNames } from 'process';

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [accompany, setAccompany] = useState<string | null>(null);
  const [attendance, setAttendance] = useState('yes');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  // const [date, setDate] = useState<Date | undefined>(new Date());

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setErrors({
        name: !name ? content.nameError : '',
        email: !email ? content.emailError : '',
      });
      return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('accompany', accompany || '0');
    formData.append('attendance', attendance);
    const response = await submitRSVP(formData);

    if (response.success) {
      setName('');
      setEmail('');
      setAccompany(null);
      setAttendance('yes');
    }
    toast.success('RSVP has been sent Successfully', {
      description: content.eventDate + ' at ' + content.eventLocation,
    });
  };

  const openGoogleMaps = () => {
    const encodedLocation = encodeURIComponent(content.eventLocation);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`,
      '_blank'
    );
  };

  return (
    <div className='max-w-md my-10 mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>{content.title}</h1>
      <p className='mb-6'>{content.description}</p>
      <div className='mb-6'>
        <Label>{content.eventDateLabel}</Label>
        <Calendar
          mode='single'
          selected={new Date(content.eventDate)}
          fromDate={new Date(content.eventDate)}
          toDate={new Date(content.eventDate)}
          defaultMonth={new Date(content.eventDate)}
          ISOWeek
          className='rounded-md border flex flex-col items-center'
        />
        <div className='mt-4'>
          <Button
            type='button'
            variant={'outline'}
            className='w-full'
            onClick={openGoogleMaps}
          >
            <MapPin />
            <span>{content.eventLocationName}</span>
          </Button>
        </div>
      </div>
      <form onSubmit={handleFormSubmit} className='space-y-6'>
        <div>
          <Label htmlFor='name'>{content.nameLabel}</Label>
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
          <Label htmlFor='email'>{content.emailLabel}</Label>
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
          <Label htmlFor='accompany'>{content.accompanyLabel}</Label>
          <Input
            id='accompnay'
            type='number'
            min='0'
            value={accompany || ''}
            onChange={(e) => setAccompany(e.target.value)}
          />
        </div>
        <div>
          <Label>{content.rsvpLabel}</Label>
          <RadioGroup value={attendance} onValueChange={setAttendance}>
            <div className='flex space-x-2 items-center mt-2'>
              <RadioGroupItem value='yes' id='yes' />
              <Label htmlFor='yes'>{content.yesOption}</Label>
            </div>
            <div className='flex space-x-2 items-center'>
              <RadioGroupItem value='no' id='no ' />
              <Label htmlFor='no'>{content.noOption}</Label>
            </div>
          </RadioGroup>
        </div>

        <Button
          type='submit'
          disabled={isLoading}
          onClick={() =>
            toast.success('Event has been created', {
              description: 'Monday, January 3rd at 6:00pm',
            })
          }
        >
          {isLoading ? 'Loading...' : content.submitButton}
        </Button>
      </form>
    </div>
  );
};

export default RSVPForm;
