export type Role = 'visitor' | 'contributor' | 'moderator' | 'admin';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  role: Role;
  createdAt: Date;
}

export type Dialect = 'Hunza' | 'Nagar' | 'Yasin';
export type Status = 'pending' | 'approved' | 'rejected';

export interface Word {
  id?: string;
  burushaskiWord: string;
  dialect: Dialect;
  englishMeaning: string;
  urduMeaning: string;
  pronunciation: string;
  partOfSpeech: string;
  exampleSentence: string;
  alternateSpellings: string[];
  status: Status;
  createdBy: string;
  createdAt: Date;
  moderatedBy?: string;
  moderatedAt?: Date;
}
