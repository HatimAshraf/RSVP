'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  MapPin,
  Clock,
  CalendarDays,
  Users,
  Mail,
  User,
  Sparkles,
  Heart,
} from 'lucide-react';
import { content } from '../utils/content';

export default function EnhancedEventForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [accompany, setAccompany] = useState('');
  const [attendance, setAttendance] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Mock content - replace with your actual content object

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle success
    }, 2000);
  };

  const openGoogleMaps = () => {
    // Mock function - implement your Google Maps logic
    console.log('Opening Google Maps...');
  };

  return (
    <div className='min-h-screen bg-gradient-to-br py-8 px-4'>
      <div className='max-w-2xl mx-auto'>
        {/* Header Section*/}
        <div className='text-center mb-8 animate-fade-in'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mb-4 shadow-lg'>
            <Heart className='w-8 h-8 text-white animate-pulse' />
          </div>
          <h1 className='text-4xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-4'>
            {content.title}
          </h1>
          <p className='text-lg text-gray-600 leading-relaxed max-w-xl mx-auto'>
            {content.description}
          </p>
        </div>

        {/* Main Form Card */}
        <div className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden'>
          {/* Event Details Section */}
          <div className='bg-gradient-to-r from-rose-500 to-pink-500 p-6 text-white'>
            <h2 className='text-xl font-semibold mb-4 flex items-center gap-2'>
              <Sparkles className='w-5 h-5' />
              Event Details
            </h2>

            <div className='grid md:grid-cols-3 gap-4'>
              {/* Date Card */}
              <div className='bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30'>
                <Label className='text-sm font-medium text-white/90 flex items-center gap-2'>
                  <CalendarDays className='w-4 h-4' />
                  {content.eventDateLabel}
                </Label>
                <div className='text-lg font-semibold'>
                  {new Date(content.eventDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>

              {/* Time Card */}
              <div className='bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30'>
                <div className='flex items-center gap-2 mb-2'>
                  <Clock className='w-4 h-4' />
                  <Label className='text-sm font-medium text-white/90'>
                    {content.eventTimeLabel}
                  </Label>
                </div>
                <div className='text-lg font-semibold'>
                  {new Date(
                    `2000-01-01T${content.eventTime}`
                  ).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                  })}
                </div>
              </div>

              {/* Location Card */}
              <div className='bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30'>
                <div className='flex items-center gap-2 mb-2'>
                  <MapPin className='w-4 h-4' />
                  <Label className='text-sm font-medium text-white/90'>
                    {content.eventLocationLabel}
                  </Label>
                </div>
                <Button
                  type='button'
                  variant='ghost'
                  className='h-auto p-0 text-white hover:text-white/80 hover:bg-transparent font-semibold text-left justify-start'
                  onClick={openGoogleMaps}
                >
                  {content.eventLocationName}
                </Button>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className='p-8'>
            <div onSubmit={handleFormSubmit} className='space-y-6'>
              {/* Personal Info Section */}
              <div className='space-y-4'>
                <h3 className='text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4'>
                  <User className='w-5 h-5 text-rose-500' />
                  Your Information
                </h3>

                <div className='grid md:grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <Label
                      htmlFor='name'
                      className='text-sm font-medium text-gray-700 flex items-center gap-2'
                    >
                      <User className='w-4 h-4 text-rose-400' />
                      {content.nameLabel}
                    </Label>
                    <Input
                      id='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className='border-gray-200 focus:border-rose-400 focus:ring-rose-400/20 rounded-xl h-12 transition-all duration-200 hover:border-rose-300'
                      placeholder='Enter your full name'
                    />
                    {errors.name && (
                      <p className='text-red-500 text-sm mt-1 animate-shake'>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className='space-y-2'>
                    <Label
                      htmlFor='email'
                      className='text-sm font-medium text-gray-700 flex items-center gap-2'
                    >
                      <Mail className='w-4 h-4 text-rose-400' />
                      {content.emailLabel}
                    </Label>
                    <Input
                      id='email'
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className='border-gray-200 focus:border-rose-400 focus:ring-rose-400/20 rounded-xl h-12 transition-all duration-200 hover:border-rose-300'
                      placeholder='your.email@example.com'
                    />
                    {errors.email && (
                      <p className='text-red-500 text-sm mt-1 animate-shake'>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className='space-y-2'>
                  <Label
                    htmlFor='accompany'
                    className='text-sm font-medium text-gray-700 flex items-center gap-2'
                  >
                    <Users className='w-4 h-4 text-rose-400' />
                    {content.accompanyLabel}
                  </Label>
                  <Input
                    id='accompany'
                    type='number'
                    min='0'
                    max='10'
                    value={accompany || ''}
                    onChange={(e) => setAccompany(e.target.value)}
                    className='border-gray-200 focus:border-rose-400 focus:ring-rose-400/20 rounded-xl h-12 transition-all duration-200 hover:border-rose-300 max-w-32'
                    placeholder='0'
                  />
                  <p className='text-xs text-gray-500'>
                    Including yourself in the total count
                  </p>
                </div>
              </div>

              {/* RSVP Section */}
              <div className='space-y-4'>
                <Label className='text-lg font-semibold text-gray-800 flex items-center gap-2'>
                  <Heart className='w-5 h-5 text-rose-500' />
                  {content.rsvpLabel}
                </Label>

                <RadioGroup
                  value={attendance}
                  onValueChange={setAttendance}
                  className='space-y-3'
                >
                  <div className='relative'>
                    <div
                      className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                        attendance === 'yes'
                          ? 'border-green-400 bg-green-50 shadow-md'
                          : 'border-gray-200 hover:border-green-300 hover:bg-green-50/50'
                      }`}
                    >
                      <RadioGroupItem
                        value='yes'
                        id='yes'
                        className='border-green-400 text-green-600'
                      />
                      <Label
                        htmlFor='yes'
                        className='cursor-pointer font-medium text-gray-700 flex-1'
                      >
                        {content.yesOption}
                      </Label>
                      {attendance === 'yes' && (
                        <div className='text-green-600 animate-bounce'>🎉</div>
                      )}
                    </div>
                  </div>

                  <div className='relative'>
                    <div
                      className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                        attendance === 'no'
                          ? 'border-gray-400 bg-gray-50 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50/50'
                      }`}
                    >
                      <RadioGroupItem
                        value='no'
                        id='no'
                        className='border-gray-400 text-gray-600'
                      />
                      <Label
                        htmlFor='no'
                        className='cursor-pointer font-medium text-gray-700 flex-1'
                      >
                        {content.noOption}
                      </Label>
                      {attendance === 'no' && (
                        <div className='text-gray-600'>😔</div>
                      )}
                    </div>
                  </div>
                </RadioGroup>
              </div>

              {/* Submit Button */}
              <div className='pt-4'>
                <Button
                  type='submit'
                  disabled={isLoading || !attendance}
                  className={`w-full h-14 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
                    attendance === 'yes'
                      ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-500/25'
                      : attendance === 'no'
                      ? 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 shadow-lg shadow-gray-500/25'
                      : 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-lg shadow-rose-500/25'
                  }`}
                  onClick={() => {
                    // Mock toast - replace with your actual toast implementation
                    console.log('RSVP submitted successfully!');
                  }}
                >
                  {isLoading ? (
                    <div className='flex items-center gap-2'>
                      <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                      Sending RSVP...
                    </div>
                  ) : (
                    <div className='flex items-center gap-2'>
                      <Heart className='w-5 h-5' />
                      {content.submitButton}
                    </div>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className='bg-gray-50 px-8 py-4 text-center border-t border-gray-100'>
            <p className='text-sm text-gray-500'>
              Can't wait to celebrate with you! 💕
            </p>
          </div>
        </div>

        {/* Floating Decorations */}
      </div>
    </div>
  );
}
