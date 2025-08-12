/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { UseFormReturn } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { FileUploader } from './FileUploader';
import React from 'react';


const MAX_FILE_SIZE = 5 * 1024 * 1024; 

interface FileUploaderFieldProps {
  form: UseFormReturn<
    {
      name: string;
      images: File[];
    },
    any,
    undefined
  >;
}

export function FileUploaderField(props: FileUploaderFieldProps) {
  const { form } = props;

  return (
    <FormField
      control={form.control}
      name="images"
      render={({ field }) => (
        <div className="space-y-6 w-full">
          <FormItem className="w-full">
            <FormLabel> </FormLabel>
            <FormControl>
              <FileUploader
                value={field.value}
                onValueChange={field.onChange}
                maxFileCount={1}
                maxSize={MAX_FILE_SIZE}
                // progresses={progresses}
                // pass the onUpload function here for direct upload
                // onUpload={uploadFiles}
                // disabled={isUploading}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </div>
      )}
    />
  );
}