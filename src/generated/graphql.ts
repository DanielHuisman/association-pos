import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: string;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String'];
  expiresIn: Scalars['Int'];
};

export type Bank = {
  __typename?: 'Bank';
  bic: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
};

export type BankCreateInput = {
  bic?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type BankList = {
  __typename?: 'BankList';
  info: ListInfo;
  values: Array<Bank>;
};

export type BankOrderByInput = {
  bic?: InputMaybe<OrderByArg>;
  country?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  isActive?: InputMaybe<OrderByArg>;
  name?: InputMaybe<OrderByArg>;
};

export type BankUpdateInput = {
  bic?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type BankWhereInput = {
  AND?: InputMaybe<Array<BankWhereInput>>;
  OR?: InputMaybe<Array<BankWhereInput>>;
  bic?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<StringFilter>;
};

export type BankWhereUniqueInput = {
  bic?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type BoardPeriod = Group & {
  __typename?: 'BoardPeriod';
  endedAt?: Maybe<Scalars['Date']>;
  events: EventList;
  id: Scalars['String'];
  members: MemberList;
  name: ShortTranslatable;
  startedAt: Scalars['Date'];
};


export type BoardPeriodeventsArgs = {
  orderBy?: InputMaybe<EventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type BoardPeriodmembersArgs = {
  orderBy?: InputMaybe<MemberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MemberWhereInput>;
};

export type BoardPeriodCreateInput = {
  endedAt?: InputMaybe<Scalars['Date']>;
  events?: InputMaybe<Array<EventCreateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Array<MemberCreateRelationInput>>;
  name?: InputMaybe<ShortTranslatableCreateInput>;
  startedAt?: InputMaybe<Scalars['Date']>;
};

export type BoardPeriodList = {
  __typename?: 'BoardPeriodList';
  info: ListInfo;
  values: Array<BoardPeriod>;
};

export type BoardPeriodOrderByInput = {
  endedAt?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  name?: InputMaybe<ShortTranslatableOrderByInput>;
  startedAt?: InputMaybe<OrderByArg>;
};

export type BoardPeriodUpdateInput = {
  endedAt?: InputMaybe<Scalars['Date']>;
  events?: InputMaybe<Array<EventUpdateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Array<MemberUpdateRelationInput>>;
  name?: InputMaybe<ShortTranslatableUpdateInput>;
  startedAt?: InputMaybe<Scalars['Date']>;
};

export type BoardPeriodWhereInput = {
  AND?: InputMaybe<Array<BoardPeriodWhereInput>>;
  OR?: InputMaybe<Array<BoardPeriodWhereInput>>;
  endedAt?: InputMaybe<DateTimeFilter>;
  events?: InputMaybe<EventWhereInput>;
  id?: InputMaybe<StringFilter>;
  members?: InputMaybe<MemberWhereInput>;
  name?: InputMaybe<ShortTranslatableWhereInput>;
  startedAt?: InputMaybe<DateTimeFilter>;
};

export type BoardPeriodWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Committee = {
  __typename?: 'Committee';
  description: LongTranslatable;
  id: Scalars['String'];
  name: ShortTranslatable;
  periods: CommitteePeriodList;
};


export type CommitteeperiodsArgs = {
  orderBy?: InputMaybe<CommitteePeriodOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommitteePeriodWhereInput>;
};

export type CommitteeCreateInput = {
  description?: InputMaybe<LongTranslatableCreateInput>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<ShortTranslatableCreateInput>;
  periods?: InputMaybe<Array<CommitteePeriodCreateRelationInput>>;
};

export type CommitteeCreateRelationInput = {
  connect?: InputMaybe<CommitteeWhereUniqueInput>;
  create?: InputMaybe<CommitteeCreateInput>;
};

export type CommitteeList = {
  __typename?: 'CommitteeList';
  info: ListInfo;
  values: Array<Committee>;
};

export type CommitteeOrderByInput = {
  description?: InputMaybe<LongTranslatableOrderByInput>;
  id?: InputMaybe<OrderByArg>;
  name?: InputMaybe<ShortTranslatableOrderByInput>;
};

export type CommitteePeriod = Group & {
  __typename?: 'CommitteePeriod';
  committee: Committee;
  endedAt?: Maybe<Scalars['Date']>;
  events: EventList;
  id: Scalars['String'];
  members: MemberList;
  name: ShortTranslatable;
  startedAt: Scalars['Date'];
};


export type CommitteePeriodeventsArgs = {
  orderBy?: InputMaybe<EventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type CommitteePeriodmembersArgs = {
  orderBy?: InputMaybe<MemberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MemberWhereInput>;
};

export type CommitteePeriodCreateInput = {
  committee?: InputMaybe<CommitteeCreateRelationInput>;
  endedAt?: InputMaybe<Scalars['Date']>;
  events?: InputMaybe<Array<EventCreateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Array<MemberCreateRelationInput>>;
  name?: InputMaybe<ShortTranslatableCreateInput>;
  startedAt?: InputMaybe<Scalars['Date']>;
};

export type CommitteePeriodCreateRelationInput = {
  connect?: InputMaybe<CommitteePeriodWhereUniqueInput>;
  create?: InputMaybe<CommitteePeriodCreateInput>;
};

export type CommitteePeriodList = {
  __typename?: 'CommitteePeriodList';
  info: ListInfo;
  values: Array<CommitteePeriod>;
};

export type CommitteePeriodOrderByInput = {
  committee?: InputMaybe<CommitteeOrderByInput>;
  endedAt?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  name?: InputMaybe<ShortTranslatableOrderByInput>;
  startedAt?: InputMaybe<OrderByArg>;
};

export type CommitteePeriodUpdateInput = {
  committee?: InputMaybe<CommitteeUpdateRelationInput>;
  endedAt?: InputMaybe<Scalars['Date']>;
  events?: InputMaybe<Array<EventUpdateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Array<MemberUpdateRelationInput>>;
  name?: InputMaybe<ShortTranslatableUpdateInput>;
  startedAt?: InputMaybe<Scalars['Date']>;
};

export type CommitteePeriodUpdateRelationInput = {
  connect?: InputMaybe<CommitteePeriodWhereUniqueInput>;
  create?: InputMaybe<CommitteePeriodCreateInput>;
  disconnect?: InputMaybe<CommitteePeriodWhereUniqueInput>;
};

export type CommitteePeriodWhereInput = {
  AND?: InputMaybe<Array<CommitteePeriodWhereInput>>;
  OR?: InputMaybe<Array<CommitteePeriodWhereInput>>;
  committee?: InputMaybe<CommitteeWhereInput>;
  endedAt?: InputMaybe<DateTimeFilter>;
  events?: InputMaybe<EventWhereInput>;
  id?: InputMaybe<StringFilter>;
  members?: InputMaybe<MemberWhereInput>;
  name?: InputMaybe<ShortTranslatableWhereInput>;
  startedAt?: InputMaybe<DateTimeFilter>;
};

export type CommitteePeriodWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type CommitteeUpdateInput = {
  description?: InputMaybe<LongTranslatableUpdateInput>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<ShortTranslatableUpdateInput>;
  periods?: InputMaybe<Array<CommitteePeriodUpdateRelationInput>>;
};

export type CommitteeUpdateRelationInput = {
  connect?: InputMaybe<CommitteeWhereUniqueInput>;
  create?: InputMaybe<CommitteeCreateInput>;
  disconnect?: InputMaybe<CommitteeWhereUniqueInput>;
};

export type CommitteeWhereInput = {
  AND?: InputMaybe<Array<CommitteeWhereInput>>;
  OR?: InputMaybe<Array<CommitteeWhereInput>>;
  description?: InputMaybe<LongTranslatableWhereInput>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<ShortTranslatableWhereInput>;
  periods?: InputMaybe<CommitteePeriodWhereInput>;
};

export type CommitteeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type CreateDigitalMandateInput = {
  bic: Scalars['String'];
  member: MemberWhereUniqueInput;
};

export type CreateDigitalMandateResult = {
  __typename?: 'CreateDigitalMandateResult';
  mandate: DigitalMandate;
  redirectUrl: Scalars['String'];
};

export type CreatePaperMandateInput = {
  bic: Scalars['String'];
  iban: Scalars['String'];
  member: MemberWhereUniqueInput;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DigitalMandate = Mandate & {
  __typename?: 'DigitalMandate';
  acceptedAt?: Maybe<Scalars['DateTime']>;
  bic: Scalars['String'];
  createdAt: Scalars['DateTime'];
  entranceCode: Scalars['String'];
  errorMessage?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  instructions: DirectDebitInstructionList;
  isFirstTransaction: Scalars['Boolean'];
  mandateId: Scalars['String'];
  member: Member;
  messageId: Scalars['String'];
  reason: Scalars['String'];
  status: MandateStatus;
  transactionId?: Maybe<Scalars['String']>;
};


export type DigitalMandateinstructionsArgs = {
  orderBy?: InputMaybe<DirectDebitInstructionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitInstructionWhereInput>;
};

export type DigitalMandateCreateInput = {
  acceptedAt?: InputMaybe<Scalars['DateTime']>;
  bic?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  entranceCode?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  iban?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Array<DirectDebitInstructionCreateRelationInput>>;
  isFirstTransaction?: InputMaybe<Scalars['Boolean']>;
  mandateId?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberCreateRelationInput>;
  messageId?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MandateStatus>;
  transactionId?: InputMaybe<Scalars['String']>;
};

export type DigitalMandateList = {
  __typename?: 'DigitalMandateList';
  info: ListInfo;
  values: Array<DigitalMandate>;
};

export type DigitalMandateOrderByInput = {
  acceptedAt?: InputMaybe<OrderByArg>;
  bic?: InputMaybe<OrderByArg>;
  createdAt?: InputMaybe<OrderByArg>;
  entranceCode?: InputMaybe<OrderByArg>;
  errorMessage?: InputMaybe<OrderByArg>;
  iban?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  isFirstTransaction?: InputMaybe<OrderByArg>;
  mandateId?: InputMaybe<OrderByArg>;
  member?: InputMaybe<MemberOrderByInput>;
  messageId?: InputMaybe<OrderByArg>;
  reason?: InputMaybe<OrderByArg>;
  status?: InputMaybe<OrderByArg>;
  transactionId?: InputMaybe<OrderByArg>;
};

export type DigitalMandateUpdateInput = {
  acceptedAt?: InputMaybe<Scalars['DateTime']>;
  bic?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  entranceCode?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  iban?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Array<DirectDebitInstructionUpdateRelationInput>>;
  isFirstTransaction?: InputMaybe<Scalars['Boolean']>;
  mandateId?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberUpdateRelationInput>;
  messageId?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MandateStatus>;
  transactionId?: InputMaybe<Scalars['String']>;
};

export type DigitalMandateWhereInput = {
  AND?: InputMaybe<Array<DigitalMandateWhereInput>>;
  OR?: InputMaybe<Array<DigitalMandateWhereInput>>;
  acceptedAt?: InputMaybe<DateTimeFilter>;
  bic?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  entranceCode?: InputMaybe<StringFilter>;
  errorMessage?: InputMaybe<StringFilter>;
  iban?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  instructions?: InputMaybe<DirectDebitInstructionWhereInput>;
  isFirstTransaction?: InputMaybe<Scalars['Boolean']>;
  mandateId?: InputMaybe<StringFilter>;
  member?: InputMaybe<MemberWhereInput>;
  messageId?: InputMaybe<StringFilter>;
  reason?: InputMaybe<StringFilter>;
  status?: InputMaybe<MandateStatusFilter>;
  transactionId?: InputMaybe<StringFilter>;
};

export type DigitalMandateWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DirectDebit = {
  __typename?: 'DirectDebit';
  amount: Scalars['Int'];
  batches: DirectDebitBatchList;
  collectionDate: Scalars['String'];
  createdAt: Scalars['DateTime'];
  file?: Maybe<File>;
  id: Scalars['String'];
  instructionCount: Scalars['Int'];
  messageId: Scalars['String'];
  status: DirectDebitStatus;
  updatedAt: Scalars['DateTime'];
  warnings: DirectDebitWarningList;
};


export type DirectDebitbatchesArgs = {
  orderBy?: InputMaybe<DirectDebitBatchOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitBatchWhereInput>;
};


export type DirectDebitwarningsArgs = {
  orderBy?: InputMaybe<DirectDebitWarningOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitWarningWhereInput>;
};

export type DirectDebitBatch = {
  __typename?: 'DirectDebitBatch';
  amount: Scalars['Int'];
  batchId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  directDebit: DirectDebit;
  id: Scalars['String'];
  instructionCount: Scalars['Int'];
  instructions: DirectDebitInstructionList;
  sequenceType: SequenceType;
  updatedAt: Scalars['DateTime'];
};


export type DirectDebitBatchinstructionsArgs = {
  orderBy?: InputMaybe<DirectDebitInstructionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitInstructionWhereInput>;
};

export type DirectDebitBatchCreateInput = {
  batchId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  directDebit?: InputMaybe<DirectDebitCreateRelationInput>;
  id?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Array<DirectDebitInstructionCreateRelationInput>>;
  sequenceType?: InputMaybe<SequenceType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DirectDebitBatchCreateRelationInput = {
  connect?: InputMaybe<DirectDebitBatchWhereUniqueInput>;
  create?: InputMaybe<DirectDebitBatchCreateInput>;
};

export type DirectDebitBatchList = {
  __typename?: 'DirectDebitBatchList';
  info: ListInfo;
  values: Array<DirectDebitBatch>;
};

export type DirectDebitBatchOrderByInput = {
  batchId?: InputMaybe<OrderByArg>;
  createdAt?: InputMaybe<OrderByArg>;
  directDebit?: InputMaybe<DirectDebitOrderByInput>;
  id?: InputMaybe<OrderByArg>;
  sequenceType?: InputMaybe<OrderByArg>;
  updatedAt?: InputMaybe<OrderByArg>;
};

export type DirectDebitBatchUpdateInput = {
  batchId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  directDebit?: InputMaybe<DirectDebitUpdateRelationInput>;
  id?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Array<DirectDebitInstructionUpdateRelationInput>>;
  sequenceType?: InputMaybe<SequenceType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DirectDebitBatchUpdateRelationInput = {
  connect?: InputMaybe<DirectDebitBatchWhereUniqueInput>;
  create?: InputMaybe<DirectDebitBatchCreateInput>;
  disconnect?: InputMaybe<DirectDebitBatchWhereUniqueInput>;
};

export type DirectDebitBatchWhereInput = {
  AND?: InputMaybe<Array<DirectDebitBatchWhereInput>>;
  OR?: InputMaybe<Array<DirectDebitBatchWhereInput>>;
  batchId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  directDebit?: InputMaybe<DirectDebitWhereInput>;
  id?: InputMaybe<StringFilter>;
  instructions?: InputMaybe<DirectDebitInstructionWhereInput>;
  sequenceType?: InputMaybe<SequenceTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DirectDebitBatchWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DirectDebitCreateInput = {
  batches?: InputMaybe<Array<DirectDebitBatchCreateRelationInput>>;
  collectionDate?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  file?: InputMaybe<FileCreateRelationInput>;
  id?: InputMaybe<Scalars['String']>;
  messageId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<DirectDebitStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  warnings?: InputMaybe<Array<DirectDebitWarningCreateRelationInput>>;
};

export type DirectDebitCreateRelationInput = {
  connect?: InputMaybe<DirectDebitWhereUniqueInput>;
  create?: InputMaybe<DirectDebitCreateInput>;
};

export type DirectDebitInstruction = {
  __typename?: 'DirectDebitInstruction';
  amount: Scalars['Int'];
  batch: DirectDebitBatch;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  instructionId: Scalars['String'];
  mandate: Mandate;
  transactions: TransactionList;
  updatedAt: Scalars['DateTime'];
};


export type DirectDebitInstructiontransactionsArgs = {
  orderBy?: InputMaybe<TransactionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionWhereInput>;
};

export type DirectDebitInstructionCreateInput = {
  batch?: InputMaybe<DirectDebitBatchCreateRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instructionId?: InputMaybe<Scalars['String']>;
  mandate?: InputMaybe<MandateCreateRelationInput>;
  transactions?: InputMaybe<Array<TransactionCreateRelationInput>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DirectDebitInstructionCreateRelationInput = {
  connect?: InputMaybe<DirectDebitInstructionWhereUniqueInput>;
  create?: InputMaybe<DirectDebitInstructionCreateInput>;
};

export type DirectDebitInstructionList = {
  __typename?: 'DirectDebitInstructionList';
  info: ListInfo;
  values: Array<DirectDebitInstruction>;
};

export type DirectDebitInstructionOrderByInput = {
  batch?: InputMaybe<DirectDebitBatchOrderByInput>;
  createdAt?: InputMaybe<OrderByArg>;
  description?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  instructionId?: InputMaybe<OrderByArg>;
  mandate?: InputMaybe<MandateOrderByInput>;
  updatedAt?: InputMaybe<OrderByArg>;
};

export type DirectDebitInstructionUpdateInput = {
  batch?: InputMaybe<DirectDebitBatchUpdateRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instructionId?: InputMaybe<Scalars['String']>;
  mandate?: InputMaybe<MandateUpdateRelationInput>;
  transactions?: InputMaybe<Array<TransactionUpdateRelationInput>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DirectDebitInstructionUpdateRelationInput = {
  connect?: InputMaybe<DirectDebitInstructionWhereUniqueInput>;
  create?: InputMaybe<DirectDebitInstructionCreateInput>;
  disconnect?: InputMaybe<DirectDebitInstructionWhereUniqueInput>;
};

export type DirectDebitInstructionWhereInput = {
  AND?: InputMaybe<Array<DirectDebitInstructionWhereInput>>;
  OR?: InputMaybe<Array<DirectDebitInstructionWhereInput>>;
  batch?: InputMaybe<DirectDebitBatchWhereInput>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  instructionId?: InputMaybe<StringFilter>;
  mandate?: InputMaybe<MandateWhereInput>;
  transactions?: InputMaybe<TransactionWhereInput>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DirectDebitInstructionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DirectDebitList = {
  __typename?: 'DirectDebitList';
  info: ListInfo;
  values: Array<DirectDebit>;
};

export type DirectDebitOrderByInput = {
  collectionDate?: InputMaybe<OrderByArg>;
  createdAt?: InputMaybe<OrderByArg>;
  file?: InputMaybe<FileOrderByInput>;
  id?: InputMaybe<OrderByArg>;
  messageId?: InputMaybe<OrderByArg>;
  status?: InputMaybe<OrderByArg>;
  updatedAt?: InputMaybe<OrderByArg>;
};

export enum DirectDebitStatus {
  ACCEPTED = 'ACCEPTED',
  CANCELLED = 'CANCELLED',
  CREATED = 'CREATED',
  GENERATED = 'GENERATED',
  REJECTED = 'REJECTED'
}

export type DirectDebitStatusFilter = {
  equals?: InputMaybe<DirectDebitStatus>;
  in?: InputMaybe<Array<DirectDebitStatus>>;
  not?: InputMaybe<DirectDebitStatus>;
  notIn?: InputMaybe<Array<DirectDebitStatus>>;
};

export type DirectDebitUpdateInput = {
  batches?: InputMaybe<Array<DirectDebitBatchUpdateRelationInput>>;
  collectionDate?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  file?: InputMaybe<FileUpdateRelationInput>;
  id?: InputMaybe<Scalars['String']>;
  messageId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<DirectDebitStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  warnings?: InputMaybe<Array<DirectDebitWarningUpdateRelationInput>>;
};

export type DirectDebitUpdateRelationInput = {
  connect?: InputMaybe<DirectDebitWhereUniqueInput>;
  create?: InputMaybe<DirectDebitCreateInput>;
  disconnect?: InputMaybe<DirectDebitWhereUniqueInput>;
};

export type DirectDebitWarning = {
  __typename?: 'DirectDebitWarning';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  directDebit: DirectDebit;
  id: Scalars['String'];
  member?: Maybe<Member>;
  updatedAt: Scalars['DateTime'];
};

export type DirectDebitWarningCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  directDebit?: InputMaybe<DirectDebitCreateRelationInput>;
  id?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberCreateRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DirectDebitWarningCreateRelationInput = {
  connect?: InputMaybe<DirectDebitWarningWhereUniqueInput>;
  create?: InputMaybe<DirectDebitWarningCreateInput>;
};

export type DirectDebitWarningList = {
  __typename?: 'DirectDebitWarningList';
  info: ListInfo;
  values: Array<DirectDebitWarning>;
};

export type DirectDebitWarningOrderByInput = {
  createdAt?: InputMaybe<OrderByArg>;
  description?: InputMaybe<OrderByArg>;
  directDebit?: InputMaybe<DirectDebitOrderByInput>;
  id?: InputMaybe<OrderByArg>;
  member?: InputMaybe<MemberOrderByInput>;
  updatedAt?: InputMaybe<OrderByArg>;
};

export type DirectDebitWarningUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  directDebit?: InputMaybe<DirectDebitUpdateRelationInput>;
  id?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberUpdateRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DirectDebitWarningUpdateRelationInput = {
  connect?: InputMaybe<DirectDebitWarningWhereUniqueInput>;
  create?: InputMaybe<DirectDebitWarningCreateInput>;
  disconnect?: InputMaybe<DirectDebitWarningWhereUniqueInput>;
};

export type DirectDebitWarningWhereInput = {
  AND?: InputMaybe<Array<DirectDebitWarningWhereInput>>;
  OR?: InputMaybe<Array<DirectDebitWarningWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  directDebit?: InputMaybe<DirectDebitWhereInput>;
  id?: InputMaybe<StringFilter>;
  member?: InputMaybe<MemberWhereInput>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DirectDebitWarningWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DirectDebitWhereInput = {
  AND?: InputMaybe<Array<DirectDebitWhereInput>>;
  OR?: InputMaybe<Array<DirectDebitWhereInput>>;
  batches?: InputMaybe<DirectDebitBatchWhereInput>;
  collectionDate?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  file?: InputMaybe<FileWhereInput>;
  id?: InputMaybe<StringFilter>;
  messageId?: InputMaybe<StringFilter>;
  status?: InputMaybe<DirectDebitStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  warnings?: InputMaybe<DirectDebitWarningWhereInput>;
};

export type DirectDebitWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Entry = {
  amount: Scalars['Int'];
  children: EntryList;
  id: Scalars['String'];
  member: Member;
  parent: Entry;
  price: Scalars['Int'];
  product: Product;
  size: ProductSize;
};


export type EntrychildrenArgs = {
  orderBy?: InputMaybe<EntryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryWhereInput>;
};

export type EntryConsumption = Entry & {
  __typename?: 'EntryConsumption';
  amount: Scalars['Int'];
  children: EntryList;
  id: Scalars['String'];
  member: Member;
  parent: Entry;
  price: Scalars['Int'];
  product: Product;
  production: EntryProduction;
  size: ProductSize;
};


export type EntryConsumptionchildrenArgs = {
  orderBy?: InputMaybe<EntryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryWhereInput>;
};

export type EntryConsumptionCreateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  children?: InputMaybe<Array<EntryCreateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberCreateRelationInput>;
  parent?: InputMaybe<EntryCreateRelationInput>;
  price?: InputMaybe<Scalars['Float']>;
  product?: InputMaybe<ProductCreateRelationInput>;
  production?: InputMaybe<EntryProductionCreateRelationInput>;
  size?: InputMaybe<ProductSizeCreateRelationInput>;
};

export type EntryConsumptionCreateRelationInput = {
  connect?: InputMaybe<EntryConsumptionWhereUniqueInput>;
  create?: InputMaybe<EntryConsumptionCreateInput>;
};

export type EntryConsumptionList = {
  __typename?: 'EntryConsumptionList';
  info: ListInfo;
  values: Array<EntryConsumption>;
};

export type EntryConsumptionOrderByInput = {
  amount?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  member?: InputMaybe<MemberOrderByInput>;
  parent?: InputMaybe<EntryOrderByInput>;
  price?: InputMaybe<OrderByArg>;
  product?: InputMaybe<ProductOrderByInput>;
  production?: InputMaybe<EntryProductionOrderByInput>;
  size?: InputMaybe<ProductSizeOrderByInput>;
};

export type EntryConsumptionUpdateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  children?: InputMaybe<Array<EntryUpdateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberUpdateRelationInput>;
  parent?: InputMaybe<EntryUpdateRelationInput>;
  price?: InputMaybe<Scalars['Float']>;
  product?: InputMaybe<ProductUpdateRelationInput>;
  production?: InputMaybe<EntryProductionUpdateRelationInput>;
  size?: InputMaybe<ProductSizeUpdateRelationInput>;
};

export type EntryConsumptionUpdateRelationInput = {
  connect?: InputMaybe<EntryConsumptionWhereUniqueInput>;
  create?: InputMaybe<EntryConsumptionCreateInput>;
  disconnect?: InputMaybe<EntryConsumptionWhereUniqueInput>;
};

export type EntryConsumptionWhereInput = {
  AND?: InputMaybe<Array<EntryConsumptionWhereInput>>;
  OR?: InputMaybe<Array<EntryConsumptionWhereInput>>;
  amount?: InputMaybe<IntFilter>;
  children?: InputMaybe<EntryWhereInput>;
  id?: InputMaybe<StringFilter>;
  member?: InputMaybe<MemberWhereInput>;
  parent?: InputMaybe<EntryWhereInput>;
  price?: InputMaybe<IntFilter>;
  product?: InputMaybe<ProductWhereInput>;
  production?: InputMaybe<EntryProductionWhereInput>;
  size?: InputMaybe<ProductSizeWhereInput>;
};

export type EntryConsumptionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type EntryCreateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  children?: InputMaybe<Array<EntryCreateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberCreateRelationInput>;
  parent?: InputMaybe<EntryCreateRelationInput>;
  price?: InputMaybe<Scalars['Float']>;
  product?: InputMaybe<ProductCreateRelationInput>;
  size?: InputMaybe<ProductSizeCreateRelationInput>;
};

export type EntryCreateRelationInput = {
  connect?: InputMaybe<EntryWhereUniqueInput>;
  create?: InputMaybe<EntryCreateInput>;
};

export type EntryList = {
  __typename?: 'EntryList';
  info: ListInfo;
  values: Array<Entry>;
};

export type EntryOrderByInput = {
  amount?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  member?: InputMaybe<MemberOrderByInput>;
  parent?: InputMaybe<EntryOrderByInput>;
  price?: InputMaybe<OrderByArg>;
  product?: InputMaybe<ProductOrderByInput>;
  size?: InputMaybe<ProductSizeOrderByInput>;
};

export type EntryProduction = Entry & {
  __typename?: 'EntryProduction';
  amount: Scalars['Int'];
  children: EntryList;
  consumptions: EntryConsumptionList;
  deposit: Scalars['Int'];
  id: Scalars['String'];
  isConsumed: Scalars['Boolean'];
  member: Member;
  parent: Entry;
  price: Scalars['Int'];
  product: Product;
  size: ProductSize;
};


export type EntryProductionchildrenArgs = {
  orderBy?: InputMaybe<EntryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryWhereInput>;
};


export type EntryProductionconsumptionsArgs = {
  orderBy?: InputMaybe<EntryConsumptionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryConsumptionWhereInput>;
};

export type EntryProductionCreateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  children?: InputMaybe<Array<EntryCreateRelationInput>>;
  consumptions?: InputMaybe<Array<EntryConsumptionCreateRelationInput>>;
  deposit?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  isConsumed?: InputMaybe<Scalars['Boolean']>;
  member?: InputMaybe<MemberCreateRelationInput>;
  parent?: InputMaybe<EntryCreateRelationInput>;
  price?: InputMaybe<Scalars['Float']>;
  product?: InputMaybe<ProductCreateRelationInput>;
  size?: InputMaybe<ProductSizeCreateRelationInput>;
};

export type EntryProductionCreateRelationInput = {
  connect?: InputMaybe<EntryProductionWhereUniqueInput>;
  create?: InputMaybe<EntryProductionCreateInput>;
};

export type EntryProductionList = {
  __typename?: 'EntryProductionList';
  info: ListInfo;
  values: Array<EntryProduction>;
};

export type EntryProductionOrderByInput = {
  amount?: InputMaybe<OrderByArg>;
  deposit?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  isConsumed?: InputMaybe<OrderByArg>;
  member?: InputMaybe<MemberOrderByInput>;
  parent?: InputMaybe<EntryOrderByInput>;
  price?: InputMaybe<OrderByArg>;
  product?: InputMaybe<ProductOrderByInput>;
  size?: InputMaybe<ProductSizeOrderByInput>;
};

export type EntryProductionUpdateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  children?: InputMaybe<Array<EntryUpdateRelationInput>>;
  consumptions?: InputMaybe<Array<EntryConsumptionUpdateRelationInput>>;
  deposit?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  isConsumed?: InputMaybe<Scalars['Boolean']>;
  member?: InputMaybe<MemberUpdateRelationInput>;
  parent?: InputMaybe<EntryUpdateRelationInput>;
  price?: InputMaybe<Scalars['Float']>;
  product?: InputMaybe<ProductUpdateRelationInput>;
  size?: InputMaybe<ProductSizeUpdateRelationInput>;
};

export type EntryProductionUpdateRelationInput = {
  connect?: InputMaybe<EntryProductionWhereUniqueInput>;
  create?: InputMaybe<EntryProductionCreateInput>;
  disconnect?: InputMaybe<EntryProductionWhereUniqueInput>;
};

export type EntryProductionWhereInput = {
  AND?: InputMaybe<Array<EntryProductionWhereInput>>;
  OR?: InputMaybe<Array<EntryProductionWhereInput>>;
  amount?: InputMaybe<IntFilter>;
  children?: InputMaybe<EntryWhereInput>;
  consumptions?: InputMaybe<EntryConsumptionWhereInput>;
  deposit?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  isConsumed?: InputMaybe<Scalars['Boolean']>;
  member?: InputMaybe<MemberWhereInput>;
  parent?: InputMaybe<EntryWhereInput>;
  price?: InputMaybe<IntFilter>;
  product?: InputMaybe<ProductWhereInput>;
  size?: InputMaybe<ProductSizeWhereInput>;
};

export type EntryProductionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type EntryUpdateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  children?: InputMaybe<Array<EntryUpdateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberUpdateRelationInput>;
  parent?: InputMaybe<EntryUpdateRelationInput>;
  price?: InputMaybe<Scalars['Float']>;
  product?: InputMaybe<ProductUpdateRelationInput>;
  size?: InputMaybe<ProductSizeUpdateRelationInput>;
};

export type EntryUpdateRelationInput = {
  connect?: InputMaybe<EntryWhereUniqueInput>;
  create?: InputMaybe<EntryCreateInput>;
  disconnect?: InputMaybe<EntryWhereUniqueInput>;
};

export type EntryWhereInput = {
  AND?: InputMaybe<Array<EntryWhereInput>>;
  OR?: InputMaybe<Array<EntryWhereInput>>;
  amount?: InputMaybe<IntFilter>;
  children?: InputMaybe<EntryWhereInput>;
  id?: InputMaybe<StringFilter>;
  member?: InputMaybe<MemberWhereInput>;
  parent?: InputMaybe<EntryWhereInput>;
  price?: InputMaybe<IntFilter>;
  product?: InputMaybe<ProductWhereInput>;
  size?: InputMaybe<ProductSizeWhereInput>;
};

export type EntryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Event = {
  __typename?: 'Event';
  closedAt: Scalars['DateTime'];
  description: LongTranslatable;
  endedAt: Scalars['DateTime'];
  groups: GroupList;
  id: Scalars['String'];
  isAllDay: Scalars['Boolean'];
  isCanceled: Scalars['Boolean'];
  isMembersOnly: Scalars['Boolean'];
  isParticipationRequired: Scalars['Boolean'];
  maxParticipations?: Maybe<Scalars['Int']>;
  name: ShortTranslatable;
  openedAt: Scalars['DateTime'];
  participations: ParticipationList;
  startedAt: Scalars['DateTime'];
};


export type EventgroupsArgs = {
  orderBy?: InputMaybe<GroupOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GroupWhereInput>;
};


export type EventparticipationsArgs = {
  orderBy?: InputMaybe<ParticipationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ParticipationWhereInput>;
};

export type EventCreateInput = {
  closedAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<LongTranslatableCreateInput>;
  endedAt?: InputMaybe<Scalars['DateTime']>;
  groups?: InputMaybe<Array<GroupCreateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  isAllDay?: InputMaybe<Scalars['Boolean']>;
  isCanceled?: InputMaybe<Scalars['Boolean']>;
  isMembersOnly?: InputMaybe<Scalars['Boolean']>;
  isParticipationRequired?: InputMaybe<Scalars['Boolean']>;
  maxParticipations?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<ShortTranslatableCreateInput>;
  openedAt?: InputMaybe<Scalars['DateTime']>;
  participations?: InputMaybe<Array<ParticipationCreateRelationInput>>;
  startedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCreateRelationInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  create?: InputMaybe<EventCreateInput>;
};

export type EventList = {
  __typename?: 'EventList';
  info: ListInfo;
  values: Array<Event>;
};

export type EventOrderByInput = {
  closedAt?: InputMaybe<OrderByArg>;
  description?: InputMaybe<LongTranslatableOrderByInput>;
  endedAt?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  isAllDay?: InputMaybe<OrderByArg>;
  isCanceled?: InputMaybe<OrderByArg>;
  isMembersOnly?: InputMaybe<OrderByArg>;
  isParticipationRequired?: InputMaybe<OrderByArg>;
  maxParticipations?: InputMaybe<OrderByArg>;
  name?: InputMaybe<ShortTranslatableOrderByInput>;
  openedAt?: InputMaybe<OrderByArg>;
  startedAt?: InputMaybe<OrderByArg>;
};

export type EventUpdateInput = {
  closedAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<LongTranslatableUpdateInput>;
  endedAt?: InputMaybe<Scalars['DateTime']>;
  groups?: InputMaybe<Array<GroupUpdateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  isAllDay?: InputMaybe<Scalars['Boolean']>;
  isCanceled?: InputMaybe<Scalars['Boolean']>;
  isMembersOnly?: InputMaybe<Scalars['Boolean']>;
  isParticipationRequired?: InputMaybe<Scalars['Boolean']>;
  maxParticipations?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<ShortTranslatableUpdateInput>;
  openedAt?: InputMaybe<Scalars['DateTime']>;
  participations?: InputMaybe<Array<ParticipationUpdateRelationInput>>;
  startedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventUpdateRelationInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  create?: InputMaybe<EventCreateInput>;
  disconnect?: InputMaybe<EventWhereUniqueInput>;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  closedAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<LongTranslatableWhereInput>;
  endedAt?: InputMaybe<DateTimeFilter>;
  groups?: InputMaybe<GroupWhereInput>;
  id?: InputMaybe<StringFilter>;
  isAllDay?: InputMaybe<Scalars['Boolean']>;
  isCanceled?: InputMaybe<Scalars['Boolean']>;
  isMembersOnly?: InputMaybe<Scalars['Boolean']>;
  isParticipationRequired?: InputMaybe<Scalars['Boolean']>;
  maxParticipations?: InputMaybe<IntFilter>;
  name?: InputMaybe<ShortTranslatableWhereInput>;
  openedAt?: InputMaybe<DateTimeFilter>;
  participations?: InputMaybe<ParticipationWhereInput>;
  startedAt?: InputMaybe<DateTimeFilter>;
};

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type File = {
  __typename?: 'File';
  id: Scalars['String'];
  mimeType: Scalars['String'];
  name: Scalars['String'];
  url: Scalars['String'];
};

export type FileCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileCreateRelationInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  create?: InputMaybe<FileCreateInput>;
};

export type FileList = {
  __typename?: 'FileList';
  info: ListInfo;
  values: Array<File>;
};

export type FileOrderByInput = {
  id?: InputMaybe<OrderByArg>;
  mimeType?: InputMaybe<OrderByArg>;
  name?: InputMaybe<OrderByArg>;
};

export type FileUpdateInput = {
  id?: InputMaybe<Scalars['String']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileUpdateRelationInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  create?: InputMaybe<FileCreateInput>;
  disconnect?: InputMaybe<FileWhereUniqueInput>;
};

export type FileWhereInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  id?: InputMaybe<StringFilter>;
  mimeType?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type FileWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type Group = {
  endedAt?: Maybe<Scalars['Date']>;
  events: EventList;
  id: Scalars['String'];
  members: MemberList;
  name: ShortTranslatable;
  startedAt: Scalars['Date'];
};


export type GroupeventsArgs = {
  orderBy?: InputMaybe<EventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type GroupmembersArgs = {
  orderBy?: InputMaybe<MemberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MemberWhereInput>;
};

export type GroupCreateInput = {
  endedAt?: InputMaybe<Scalars['Date']>;
  events?: InputMaybe<Array<EventCreateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Array<MemberCreateRelationInput>>;
  name?: InputMaybe<ShortTranslatableCreateInput>;
  startedAt?: InputMaybe<Scalars['Date']>;
};

export type GroupCreateRelationInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  create?: InputMaybe<GroupCreateInput>;
};

export type GroupList = {
  __typename?: 'GroupList';
  info: ListInfo;
  values: Array<Group>;
};

export type GroupOrderByInput = {
  endedAt?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  name?: InputMaybe<ShortTranslatableOrderByInput>;
  startedAt?: InputMaybe<OrderByArg>;
};

export type GroupUpdateInput = {
  endedAt?: InputMaybe<Scalars['Date']>;
  events?: InputMaybe<Array<EventUpdateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Array<MemberUpdateRelationInput>>;
  name?: InputMaybe<ShortTranslatableUpdateInput>;
  startedAt?: InputMaybe<Scalars['Date']>;
};

export type GroupUpdateRelationInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  create?: InputMaybe<GroupCreateInput>;
  disconnect?: InputMaybe<GroupWhereUniqueInput>;
};

export type GroupWhereInput = {
  AND?: InputMaybe<Array<GroupWhereInput>>;
  OR?: InputMaybe<Array<GroupWhereInput>>;
  endedAt?: InputMaybe<DateTimeFilter>;
  events?: InputMaybe<EventWhereInput>;
  id?: InputMaybe<StringFilter>;
  members?: InputMaybe<MemberWhereInput>;
  name?: InputMaybe<ShortTranslatableWhereInput>;
  startedAt?: InputMaybe<DateTimeFilter>;
};

export type GroupWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export enum Language {
  EN = 'EN',
  NL = 'NL'
}

export type LanguageFilter = {
  equals?: InputMaybe<Language>;
  in?: InputMaybe<Array<Language>>;
  not?: InputMaybe<Language>;
  notIn?: InputMaybe<Array<Language>>;
};

export type ListInfo = {
  __typename?: 'ListInfo';
  count: Scalars['Int'];
};

export type LongTranslatable = Translatable & {
  __typename?: 'LongTranslatable';
  en?: Maybe<Scalars['String']>;
  nl?: Maybe<Scalars['String']>;
};

export type LongTranslatableCreateInput = {
  en?: InputMaybe<Scalars['String']>;
  nl?: InputMaybe<Scalars['String']>;
};

export type LongTranslatableOrderByInput = {
  en?: InputMaybe<OrderByArg>;
  nl?: InputMaybe<OrderByArg>;
};

export type LongTranslatableUpdateInput = {
  en?: InputMaybe<Scalars['String']>;
  nl?: InputMaybe<Scalars['String']>;
};

export type LongTranslatableWhereInput = {
  AND?: InputMaybe<Array<LongTranslatableWhereInput>>;
  OR?: InputMaybe<Array<LongTranslatableWhereInput>>;
  en?: InputMaybe<StringFilter>;
  nl?: InputMaybe<StringFilter>;
};

export type Mandate = {
  acceptedAt?: Maybe<Scalars['DateTime']>;
  bic: Scalars['String'];
  createdAt: Scalars['DateTime'];
  errorMessage?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  instructions: DirectDebitInstructionList;
  isFirstTransaction: Scalars['Boolean'];
  mandateId: Scalars['String'];
  member: Member;
  reason: Scalars['String'];
  status: MandateStatus;
};


export type MandateinstructionsArgs = {
  orderBy?: InputMaybe<DirectDebitInstructionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitInstructionWhereInput>;
};

export type MandateCreateInput = {
  acceptedAt?: InputMaybe<Scalars['DateTime']>;
  bic?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  iban?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Array<DirectDebitInstructionCreateRelationInput>>;
  isFirstTransaction?: InputMaybe<Scalars['Boolean']>;
  mandateId?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberCreateRelationInput>;
  reason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MandateStatus>;
};

export type MandateCreateRelationInput = {
  connect?: InputMaybe<MandateWhereUniqueInput>;
  create?: InputMaybe<MandateCreateInput>;
};

export type MandateList = {
  __typename?: 'MandateList';
  info: ListInfo;
  values: Array<Mandate>;
};

export type MandateOrderByInput = {
  acceptedAt?: InputMaybe<OrderByArg>;
  bic?: InputMaybe<OrderByArg>;
  createdAt?: InputMaybe<OrderByArg>;
  errorMessage?: InputMaybe<OrderByArg>;
  iban?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  isFirstTransaction?: InputMaybe<OrderByArg>;
  mandateId?: InputMaybe<OrderByArg>;
  member?: InputMaybe<MemberOrderByInput>;
  reason?: InputMaybe<OrderByArg>;
  status?: InputMaybe<OrderByArg>;
};

export enum MandateStatus {
  ACCEPTED = 'ACCEPTED',
  CANCELLED = 'CANCELLED',
  CREATED = 'CREATED',
  ERROR = 'ERROR',
  INVALID = 'INVALID',
  REJECTED = 'REJECTED',
  UNACCEPTED = 'UNACCEPTED'
}

export type MandateStatusFilter = {
  equals?: InputMaybe<MandateStatus>;
  in?: InputMaybe<Array<MandateStatus>>;
  not?: InputMaybe<MandateStatus>;
  notIn?: InputMaybe<Array<MandateStatus>>;
};

export type MandateUpdateInput = {
  acceptedAt?: InputMaybe<Scalars['DateTime']>;
  bic?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  iban?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Array<DirectDebitInstructionUpdateRelationInput>>;
  isFirstTransaction?: InputMaybe<Scalars['Boolean']>;
  mandateId?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberUpdateRelationInput>;
  reason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MandateStatus>;
};

export type MandateUpdateRelationInput = {
  connect?: InputMaybe<MandateWhereUniqueInput>;
  create?: InputMaybe<MandateCreateInput>;
  disconnect?: InputMaybe<MandateWhereUniqueInput>;
};

export type MandateWhereInput = {
  AND?: InputMaybe<Array<MandateWhereInput>>;
  OR?: InputMaybe<Array<MandateWhereInput>>;
  acceptedAt?: InputMaybe<DateTimeFilter>;
  bic?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  errorMessage?: InputMaybe<StringFilter>;
  iban?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  instructions?: InputMaybe<DirectDebitInstructionWhereInput>;
  isFirstTransaction?: InputMaybe<Scalars['Boolean']>;
  mandateId?: InputMaybe<StringFilter>;
  member?: InputMaybe<MemberWhereInput>;
  reason?: InputMaybe<StringFilter>;
  status?: InputMaybe<MandateStatusFilter>;
};

export type MandateWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Member = {
  __typename?: 'Member';
  address: Scalars['String'];
  birthdate: Scalars['Date'];
  city: Scalars['String'];
  email: Scalars['String'];
  entries: EntryList;
  firstName: Scalars['String'];
  groups: GroupList;
  hasMandate: Scalars['Boolean'];
  hasPendingPaperMandates: Scalars['Boolean'];
  id: Scalars['String'];
  image?: Maybe<File>;
  initials: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  language: Language;
  lastName: Scalars['String'];
  latestMembership: Membership;
  mandates: MandateList;
  memberships: MembershipList;
  participations: ParticipationList;
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
  pronouns: Pronouns;
  providers: ProviderList;
  studentType: StudentType;
  transactions: TransactionList;
  warnings: DirectDebitWarningList;
};


export type MemberentriesArgs = {
  orderBy?: InputMaybe<EntryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryWhereInput>;
};


export type MembergroupsArgs = {
  orderBy?: InputMaybe<GroupOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GroupWhereInput>;
};


export type MembermandatesArgs = {
  orderBy?: InputMaybe<MandateOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MandateWhereInput>;
};


export type MembermembershipsArgs = {
  orderBy?: InputMaybe<MembershipOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MembershipWhereInput>;
};


export type MemberparticipationsArgs = {
  orderBy?: InputMaybe<ParticipationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ParticipationWhereInput>;
};


export type MemberprovidersArgs = {
  orderBy?: InputMaybe<ProviderOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProviderWhereInput>;
};


export type MembertransactionsArgs = {
  orderBy?: InputMaybe<TransactionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionWhereInput>;
};


export type MemberwarningsArgs = {
  orderBy?: InputMaybe<DirectDebitWarningOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitWarningWhereInput>;
};

export type MemberCreateInput = {
  address?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['Date']>;
  city?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  entries?: InputMaybe<Array<EntryCreateRelationInput>>;
  firstName?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<GroupCreateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<FileCreateRelationInput>;
  initials?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<Language>;
  lastName?: InputMaybe<Scalars['String']>;
  mandates?: InputMaybe<Array<MandateCreateRelationInput>>;
  memberships?: InputMaybe<Array<MembershipCreateRelationInput>>;
  participations?: InputMaybe<Array<ParticipationCreateRelationInput>>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  pronouns?: InputMaybe<Pronouns>;
  providers?: InputMaybe<Array<ProviderCreateRelationInput>>;
  studentType?: InputMaybe<StudentType>;
  transactions?: InputMaybe<Array<TransactionCreateRelationInput>>;
  warnings?: InputMaybe<Array<DirectDebitWarningCreateRelationInput>>;
};

export type MemberCreateRelationInput = {
  connect?: InputMaybe<MemberWhereUniqueInput>;
  create?: InputMaybe<MemberCreateInput>;
};

export type MemberList = {
  __typename?: 'MemberList';
  info: ListInfo;
  values: Array<Member>;
};

export type MemberOrderByInput = {
  address?: InputMaybe<OrderByArg>;
  birthdate?: InputMaybe<OrderByArg>;
  city?: InputMaybe<OrderByArg>;
  email?: InputMaybe<OrderByArg>;
  firstName?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  image?: InputMaybe<FileOrderByInput>;
  initials?: InputMaybe<OrderByArg>;
  isAdmin?: InputMaybe<OrderByArg>;
  language?: InputMaybe<OrderByArg>;
  lastName?: InputMaybe<OrderByArg>;
  phoneNumber?: InputMaybe<OrderByArg>;
  postalCode?: InputMaybe<OrderByArg>;
  pronouns?: InputMaybe<OrderByArg>;
  studentType?: InputMaybe<OrderByArg>;
};

export type MemberUpdateInput = {
  address?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['Date']>;
  city?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  entries?: InputMaybe<Array<EntryUpdateRelationInput>>;
  firstName?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<GroupUpdateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<FileUpdateRelationInput>;
  initials?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<Language>;
  lastName?: InputMaybe<Scalars['String']>;
  mandates?: InputMaybe<Array<MandateUpdateRelationInput>>;
  memberships?: InputMaybe<Array<MembershipUpdateRelationInput>>;
  participations?: InputMaybe<Array<ParticipationUpdateRelationInput>>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  pronouns?: InputMaybe<Pronouns>;
  providers?: InputMaybe<Array<ProviderUpdateRelationInput>>;
  studentType?: InputMaybe<StudentType>;
  transactions?: InputMaybe<Array<TransactionUpdateRelationInput>>;
  warnings?: InputMaybe<Array<DirectDebitWarningUpdateRelationInput>>;
};

export type MemberUpdateRelationInput = {
  connect?: InputMaybe<MemberWhereUniqueInput>;
  create?: InputMaybe<MemberCreateInput>;
  disconnect?: InputMaybe<MemberWhereUniqueInput>;
};

export type MemberWhereInput = {
  AND?: InputMaybe<Array<MemberWhereInput>>;
  OR?: InputMaybe<Array<MemberWhereInput>>;
  address?: InputMaybe<StringFilter>;
  birthdate?: InputMaybe<DateTimeFilter>;
  city?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  entries?: InputMaybe<EntryWhereInput>;
  firstName?: InputMaybe<StringFilter>;
  groups?: InputMaybe<GroupWhereInput>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<FileWhereInput>;
  initials?: InputMaybe<StringFilter>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<LanguageFilter>;
  lastName?: InputMaybe<StringFilter>;
  mandates?: InputMaybe<MandateWhereInput>;
  memberships?: InputMaybe<MembershipWhereInput>;
  participations?: InputMaybe<ParticipationWhereInput>;
  phoneNumber?: InputMaybe<StringFilter>;
  postalCode?: InputMaybe<StringFilter>;
  pronouns?: InputMaybe<PronounsFilter>;
  providers?: InputMaybe<ProviderWhereInput>;
  studentType?: InputMaybe<StudentTypeFilter>;
  transactions?: InputMaybe<TransactionWhereInput>;
  warnings?: InputMaybe<DirectDebitWarningWhereInput>;
};

export type MemberWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Membership = {
  __typename?: 'Membership';
  endedAt?: Maybe<Scalars['Date']>;
  fee?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  isAccepted: Scalars['Boolean'];
  member: Member;
  startedAt: Scalars['Date'];
  transactions: MembershipFeeTransactionList;
  type: MembershipType;
};


export type MembershiptransactionsArgs = {
  orderBy?: InputMaybe<MembershipFeeTransactionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MembershipFeeTransactionWhereInput>;
};

export type MembershipCreateInput = {
  endedAt?: InputMaybe<Scalars['Date']>;
  fee?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  member?: InputMaybe<MemberCreateRelationInput>;
  startedAt?: InputMaybe<Scalars['Date']>;
  transactions?: InputMaybe<Array<MembershipFeeTransactionCreateRelationInput>>;
  type?: InputMaybe<MembershipTypeCreateRelationInput>;
};

export type MembershipCreateRelationInput = {
  connect?: InputMaybe<MembershipWhereUniqueInput>;
  create?: InputMaybe<MembershipCreateInput>;
};

export type MembershipFeeTransaction = Transaction & {
  __typename?: 'MembershipFeeTransaction';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  instruction?: Maybe<DirectDebitInstruction>;
  member: Member;
  membership: Membership;
  updatedAt: Scalars['DateTime'];
  year: Scalars['Int'];
};

export type MembershipFeeTransactionCreateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instruction?: InputMaybe<DirectDebitInstructionCreateRelationInput>;
  member?: InputMaybe<MemberCreateRelationInput>;
  membership?: InputMaybe<MembershipCreateRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  year?: InputMaybe<Scalars['Float']>;
};

export type MembershipFeeTransactionCreateRelationInput = {
  connect?: InputMaybe<MembershipFeeTransactionWhereUniqueInput>;
  create?: InputMaybe<MembershipFeeTransactionCreateInput>;
};

export type MembershipFeeTransactionList = {
  __typename?: 'MembershipFeeTransactionList';
  info: ListInfo;
  values: Array<MembershipFeeTransaction>;
};

export type MembershipFeeTransactionOrderByInput = {
  amount?: InputMaybe<OrderByArg>;
  createdAt?: InputMaybe<OrderByArg>;
  description?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  instruction?: InputMaybe<DirectDebitInstructionOrderByInput>;
  member?: InputMaybe<MemberOrderByInput>;
  membership?: InputMaybe<MembershipOrderByInput>;
  updatedAt?: InputMaybe<OrderByArg>;
  year?: InputMaybe<OrderByArg>;
};

export type MembershipFeeTransactionUpdateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instruction?: InputMaybe<DirectDebitInstructionUpdateRelationInput>;
  member?: InputMaybe<MemberUpdateRelationInput>;
  membership?: InputMaybe<MembershipUpdateRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  year?: InputMaybe<Scalars['Float']>;
};

export type MembershipFeeTransactionUpdateRelationInput = {
  connect?: InputMaybe<MembershipFeeTransactionWhereUniqueInput>;
  create?: InputMaybe<MembershipFeeTransactionCreateInput>;
  disconnect?: InputMaybe<MembershipFeeTransactionWhereUniqueInput>;
};

export type MembershipFeeTransactionWhereInput = {
  AND?: InputMaybe<Array<MembershipFeeTransactionWhereInput>>;
  OR?: InputMaybe<Array<MembershipFeeTransactionWhereInput>>;
  amount?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  instruction?: InputMaybe<DirectDebitInstructionWhereInput>;
  member?: InputMaybe<MemberWhereInput>;
  membership?: InputMaybe<MembershipWhereInput>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  year?: InputMaybe<IntFilter>;
};

export type MembershipFeeTransactionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type MembershipList = {
  __typename?: 'MembershipList';
  info: ListInfo;
  values: Array<Membership>;
};

export type MembershipOrderByInput = {
  endedAt?: InputMaybe<OrderByArg>;
  fee?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  isAccepted?: InputMaybe<OrderByArg>;
  member?: InputMaybe<MemberOrderByInput>;
  startedAt?: InputMaybe<OrderByArg>;
  type?: InputMaybe<MembershipTypeOrderByInput>;
};

export type MembershipType = {
  __typename?: 'MembershipType';
  fee: Scalars['Int'];
  id: Scalars['String'];
  isDefault: Scalars['Boolean'];
  name: ShortTranslatable;
};

export type MembershipTypeCreateInput = {
  fee?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<ShortTranslatableCreateInput>;
};

export type MembershipTypeCreateRelationInput = {
  connect?: InputMaybe<MembershipTypeWhereUniqueInput>;
  create?: InputMaybe<MembershipTypeCreateInput>;
};

export type MembershipTypeList = {
  __typename?: 'MembershipTypeList';
  info: ListInfo;
  values: Array<MembershipType>;
};

export type MembershipTypeOrderByInput = {
  fee?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  isDefault?: InputMaybe<OrderByArg>;
  name?: InputMaybe<ShortTranslatableOrderByInput>;
};

export type MembershipTypeUpdateInput = {
  fee?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<ShortTranslatableUpdateInput>;
};

export type MembershipTypeUpdateRelationInput = {
  connect?: InputMaybe<MembershipTypeWhereUniqueInput>;
  create?: InputMaybe<MembershipTypeCreateInput>;
  disconnect?: InputMaybe<MembershipTypeWhereUniqueInput>;
};

export type MembershipTypeWhereInput = {
  AND?: InputMaybe<Array<MembershipTypeWhereInput>>;
  OR?: InputMaybe<Array<MembershipTypeWhereInput>>;
  fee?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<ShortTranslatableWhereInput>;
};

export type MembershipTypeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type MembershipUpdateInput = {
  endedAt?: InputMaybe<Scalars['Date']>;
  fee?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  member?: InputMaybe<MemberUpdateRelationInput>;
  startedAt?: InputMaybe<Scalars['Date']>;
  transactions?: InputMaybe<Array<MembershipFeeTransactionUpdateRelationInput>>;
  type?: InputMaybe<MembershipTypeUpdateRelationInput>;
};

export type MembershipUpdateRelationInput = {
  connect?: InputMaybe<MembershipWhereUniqueInput>;
  create?: InputMaybe<MembershipCreateInput>;
  disconnect?: InputMaybe<MembershipWhereUniqueInput>;
};

export type MembershipWhereInput = {
  AND?: InputMaybe<Array<MembershipWhereInput>>;
  OR?: InputMaybe<Array<MembershipWhereInput>>;
  endedAt?: InputMaybe<DateTimeFilter>;
  fee?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  member?: InputMaybe<MemberWhereInput>;
  startedAt?: InputMaybe<DateTimeFilter>;
  transactions?: InputMaybe<MembershipFeeTransactionWhereInput>;
  type?: InputMaybe<MembershipTypeWhereInput>;
};

export type MembershipWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptPaperMandate?: Maybe<PaperMandate>;
  cancelPaperMandate?: Maybe<PaperMandate>;
  changeEmail?: Maybe<Scalars['Boolean']>;
  changePassword?: Maybe<Scalars['Boolean']>;
  createBank: Bank;
  createBoardPeriod: BoardPeriod;
  createCommittee: Committee;
  createCommitteePeriod: CommitteePeriod;
  createDigitalMandate?: Maybe<CreateDigitalMandateResult>;
  createDirectDebit: DirectDebit;
  createDirectDebitBatch: DirectDebitBatch;
  createDirectDebitInstruction: DirectDebitInstruction;
  createDirectDebitWarning: DirectDebitWarning;
  createEvent: Event;
  createFile: File;
  createGroup: Group;
  createMandate: Mandate;
  createMember: Member;
  createMembership: Membership;
  createMembershipFeeTransaction: MembershipFeeTransaction;
  createMembershipType: MembershipType;
  createPage: Page;
  createPaperMandate?: Maybe<PaperMandate>;
  createParticipation: Participation;
  createProduct: Product;
  createProductBrand: ProductBrand;
  createProductCategory: ProductCategory;
  createProductSize: ProductSize;
  createProductSubproduct: ProductSubproduct;
  createProvider: Provider;
  createSetting: Setting;
  createToken: Token;
  createTransaction: Transaction;
  deleteBank: Bank;
  deleteBanks: BankList;
  deleteBoardPeriod: BoardPeriod;
  deleteBoardPeriods: BoardPeriodList;
  deleteCommittee: Committee;
  deleteCommitteePeriod: CommitteePeriod;
  deleteCommitteePeriods: CommitteePeriodList;
  deleteCommittees: CommitteeList;
  deleteDirectDebit: DirectDebit;
  deleteDirectDebitBatch: DirectDebitBatch;
  deleteDirectDebitBatches: DirectDebitBatchList;
  deleteDirectDebitInstruction: DirectDebitInstruction;
  deleteDirectDebitInstructions: DirectDebitInstructionList;
  deleteDirectDebitWarning: DirectDebitWarning;
  deleteDirectDebitWarnings: DirectDebitWarningList;
  deleteDirectDebits: DirectDebitList;
  deleteEvent: Event;
  deleteEvents: EventList;
  deleteFile: File;
  deleteFiles: FileList;
  deleteGroup: Group;
  deleteGroups: GroupList;
  deleteMandate: Mandate;
  deleteMandates: MandateList;
  deleteMember: Member;
  deleteMembers: MemberList;
  deleteMembership: Membership;
  deleteMembershipFeeTransaction: MembershipFeeTransaction;
  deleteMembershipFeeTransactions: MembershipFeeTransactionList;
  deleteMembershipType: MembershipType;
  deleteMembershipTypes: MembershipTypeList;
  deleteMemberships: MembershipList;
  deletePage: Page;
  deletePages: PageList;
  deleteParticipation: Participation;
  deleteParticipations: ParticipationList;
  deleteProduct: Product;
  deleteProductBrand: ProductBrand;
  deleteProductBrands: ProductBrandList;
  deleteProductCategories: ProductCategoryList;
  deleteProductCategory: ProductCategory;
  deleteProductSize: ProductSize;
  deleteProductSizes: ProductSizeList;
  deleteProductSubproduct: ProductSubproduct;
  deleteProductSubproducts: ProductSubproductList;
  deleteProducts: ProductList;
  deleteProvider: Provider;
  deleteProviders: ProviderList;
  deleteSetting: Setting;
  deleteSettings: SettingList;
  deleteToken: Token;
  deleteTokens: TokenList;
  deleteTransaction: Transaction;
  deleteTransactions: TransactionList;
  generateDirectDebit?: Maybe<DirectDebit>;
  generateDirectDebitFile?: Maybe<DirectDebit>;
  generateMembershipFeeTransactions?: Maybe<Scalars['Int']>;
  invalidateMandate?: Maybe<Mandate>;
  login?: Maybe<AccessToken>;
  register?: Maybe<Scalars['Boolean']>;
  rejectPaperMandate?: Maybe<PaperMandate>;
  requestResetPassword?: Maybe<Scalars['Boolean']>;
  requestVerifyEmail?: Maybe<Scalars['Boolean']>;
  resetPassword?: Maybe<Scalars['Boolean']>;
  sendContactForm?: Maybe<Scalars['Boolean']>;
  sendMandateReminders?: Maybe<Scalars['Boolean']>;
  updateBank: Bank;
  updateBoardPeriod: BoardPeriod;
  updateCommittee: Committee;
  updateCommitteePeriod: CommitteePeriod;
  updateDirectDebit: DirectDebit;
  updateDirectDebitBatch: DirectDebitBatch;
  updateDirectDebitInstruction: DirectDebitInstruction;
  updateDirectDebitWarning: DirectDebitWarning;
  updateEvent: Event;
  updateFile: File;
  updateGroup: Group;
  updateMandate: Mandate;
  updateMember: Member;
  updateMembership: Membership;
  updateMembershipFeeTransaction: MembershipFeeTransaction;
  updateMembershipType: MembershipType;
  updatePage: Page;
  updateParticipation: Participation;
  updateProduct: Product;
  updateProductBrand: ProductBrand;
  updateProductCategory: ProductCategory;
  updateProductSize: ProductSize;
  updateProductSubproduct: ProductSubproduct;
  updateProvider: Provider;
  updateSetting: Setting;
  updateToken: Token;
  updateTransaction: Transaction;
  uploadMemberImage?: Maybe<Member>;
  uploadPaperMandate?: Maybe<PaperMandate>;
  verifyEmail?: Maybe<Scalars['Boolean']>;
};


export type MutationacceptPaperMandateArgs = {
  mandate: PaperMandateWhereUniqueInput;
};


export type MutationcancelPaperMandateArgs = {
  mandate: PaperMandateWhereUniqueInput;
};


export type MutationchangeEmailArgs = {
  email: Scalars['String'];
};


export type MutationchangePasswordArgs = {
  password: Scalars['String'];
  passwordRepeat: Scalars['String'];
};


export type MutationcreateBankArgs = {
  data: BankCreateInput;
};


export type MutationcreateBoardPeriodArgs = {
  data: BoardPeriodCreateInput;
};


export type MutationcreateCommitteeArgs = {
  data: CommitteeCreateInput;
};


export type MutationcreateCommitteePeriodArgs = {
  data: CommitteePeriodCreateInput;
};


export type MutationcreateDigitalMandateArgs = {
  data: CreateDigitalMandateInput;
};


export type MutationcreateDirectDebitArgs = {
  data: DirectDebitCreateInput;
};


export type MutationcreateDirectDebitBatchArgs = {
  data: DirectDebitBatchCreateInput;
};


export type MutationcreateDirectDebitInstructionArgs = {
  data: DirectDebitInstructionCreateInput;
};


export type MutationcreateDirectDebitWarningArgs = {
  data: DirectDebitWarningCreateInput;
};


export type MutationcreateEventArgs = {
  data: EventCreateInput;
};


export type MutationcreateFileArgs = {
  data: FileCreateInput;
};


export type MutationcreateGroupArgs = {
  data: GroupCreateInput;
};


export type MutationcreateMandateArgs = {
  data: MandateCreateInput;
};


export type MutationcreateMemberArgs = {
  data: MemberCreateInput;
};


export type MutationcreateMembershipArgs = {
  data: MembershipCreateInput;
};


export type MutationcreateMembershipFeeTransactionArgs = {
  data: MembershipFeeTransactionCreateInput;
};


export type MutationcreateMembershipTypeArgs = {
  data: MembershipTypeCreateInput;
};


export type MutationcreatePageArgs = {
  data: PageCreateInput;
};


export type MutationcreatePaperMandateArgs = {
  data: CreatePaperMandateInput;
};


export type MutationcreateParticipationArgs = {
  data: ParticipationCreateInput;
};


export type MutationcreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationcreateProductBrandArgs = {
  data: ProductBrandCreateInput;
};


export type MutationcreateProductCategoryArgs = {
  data: ProductCategoryCreateInput;
};


export type MutationcreateProductSizeArgs = {
  data: ProductSizeCreateInput;
};


export type MutationcreateProductSubproductArgs = {
  data: ProductSubproductCreateInput;
};


export type MutationcreateProviderArgs = {
  data: ProviderCreateInput;
};


export type MutationcreateSettingArgs = {
  data: SettingCreateInput;
};


export type MutationcreateTokenArgs = {
  data: TokenCreateInput;
};


export type MutationcreateTransactionArgs = {
  data: TransactionCreateInput;
};


export type MutationdeleteBankArgs = {
  where: BankWhereUniqueInput;
};


export type MutationdeleteBanksArgs = {
  orderBy?: InputMaybe<BankOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BankWhereInput>;
};


export type MutationdeleteBoardPeriodArgs = {
  where: BoardPeriodWhereUniqueInput;
};


export type MutationdeleteBoardPeriodsArgs = {
  orderBy?: InputMaybe<BoardPeriodOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BoardPeriodWhereInput>;
};


export type MutationdeleteCommitteeArgs = {
  where: CommitteeWhereUniqueInput;
};


export type MutationdeleteCommitteePeriodArgs = {
  where: CommitteePeriodWhereUniqueInput;
};


export type MutationdeleteCommitteePeriodsArgs = {
  orderBy?: InputMaybe<CommitteePeriodOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommitteePeriodWhereInput>;
};


export type MutationdeleteCommitteesArgs = {
  orderBy?: InputMaybe<CommitteeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommitteeWhereInput>;
};


export type MutationdeleteDirectDebitArgs = {
  where: DirectDebitWhereUniqueInput;
};


export type MutationdeleteDirectDebitBatchArgs = {
  where: DirectDebitBatchWhereUniqueInput;
};


export type MutationdeleteDirectDebitBatchesArgs = {
  orderBy?: InputMaybe<DirectDebitBatchOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitBatchWhereInput>;
};


export type MutationdeleteDirectDebitInstructionArgs = {
  where: DirectDebitInstructionWhereUniqueInput;
};


export type MutationdeleteDirectDebitInstructionsArgs = {
  orderBy?: InputMaybe<DirectDebitInstructionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitInstructionWhereInput>;
};


export type MutationdeleteDirectDebitWarningArgs = {
  where: DirectDebitWarningWhereUniqueInput;
};


export type MutationdeleteDirectDebitWarningsArgs = {
  orderBy?: InputMaybe<DirectDebitWarningOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitWarningWhereInput>;
};


export type MutationdeleteDirectDebitsArgs = {
  orderBy?: InputMaybe<DirectDebitOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitWhereInput>;
};


export type MutationdeleteEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationdeleteEventsArgs = {
  orderBy?: InputMaybe<EventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type MutationdeleteFileArgs = {
  where: FileWhereUniqueInput;
};


export type MutationdeleteFilesArgs = {
  orderBy?: InputMaybe<FileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type MutationdeleteGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type MutationdeleteGroupsArgs = {
  orderBy?: InputMaybe<GroupOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GroupWhereInput>;
};


export type MutationdeleteMandateArgs = {
  where: MandateWhereUniqueInput;
};


export type MutationdeleteMandatesArgs = {
  orderBy?: InputMaybe<MandateOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MandateWhereInput>;
};


export type MutationdeleteMemberArgs = {
  where: MemberWhereUniqueInput;
};


export type MutationdeleteMembersArgs = {
  orderBy?: InputMaybe<MemberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MemberWhereInput>;
};


export type MutationdeleteMembershipArgs = {
  where: MembershipWhereUniqueInput;
};


export type MutationdeleteMembershipFeeTransactionArgs = {
  where: MembershipFeeTransactionWhereUniqueInput;
};


export type MutationdeleteMembershipFeeTransactionsArgs = {
  orderBy?: InputMaybe<MembershipFeeTransactionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MembershipFeeTransactionWhereInput>;
};


export type MutationdeleteMembershipTypeArgs = {
  where: MembershipTypeWhereUniqueInput;
};


export type MutationdeleteMembershipTypesArgs = {
  orderBy?: InputMaybe<MembershipTypeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MembershipTypeWhereInput>;
};


export type MutationdeleteMembershipsArgs = {
  orderBy?: InputMaybe<MembershipOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MembershipWhereInput>;
};


export type MutationdeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationdeletePagesArgs = {
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageWhereInput>;
};


export type MutationdeleteParticipationArgs = {
  where: ParticipationWhereUniqueInput;
};


export type MutationdeleteParticipationsArgs = {
  orderBy?: InputMaybe<ParticipationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ParticipationWhereInput>;
};


export type MutationdeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationdeleteProductBrandArgs = {
  where: ProductBrandWhereUniqueInput;
};


export type MutationdeleteProductBrandsArgs = {
  orderBy?: InputMaybe<ProductBrandOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductBrandWhereInput>;
};


export type MutationdeleteProductCategoriesArgs = {
  orderBy?: InputMaybe<ProductCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductCategoryWhereInput>;
};


export type MutationdeleteProductCategoryArgs = {
  where: ProductCategoryWhereUniqueInput;
};


export type MutationdeleteProductSizeArgs = {
  where: ProductSizeWhereUniqueInput;
};


export type MutationdeleteProductSizesArgs = {
  orderBy?: InputMaybe<ProductSizeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductSizeWhereInput>;
};


export type MutationdeleteProductSubproductArgs = {
  where: ProductSubproductWhereUniqueInput;
};


export type MutationdeleteProductSubproductsArgs = {
  orderBy?: InputMaybe<ProductSubproductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductSubproductWhereInput>;
};


export type MutationdeleteProductsArgs = {
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationdeleteProviderArgs = {
  where: ProviderWhereUniqueInput;
};


export type MutationdeleteProvidersArgs = {
  orderBy?: InputMaybe<ProviderOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProviderWhereInput>;
};


export type MutationdeleteSettingArgs = {
  where: SettingWhereUniqueInput;
};


export type MutationdeleteSettingsArgs = {
  orderBy?: InputMaybe<SettingOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingWhereInput>;
};


export type MutationdeleteTokenArgs = {
  where: TokenWhereUniqueInput;
};


export type MutationdeleteTokensArgs = {
  orderBy?: InputMaybe<TokenOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenWhereInput>;
};


export type MutationdeleteTransactionArgs = {
  where: TransactionWhereUniqueInput;
};


export type MutationdeleteTransactionsArgs = {
  orderBy?: InputMaybe<TransactionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionWhereInput>;
};


export type MutationgenerateDirectDebitArgs = {
  collectionDate: Scalars['Date'];
};


export type MutationgenerateDirectDebitFileArgs = {
  directDebit: DirectDebitWhereUniqueInput;
};


export type MutationgenerateMembershipFeeTransactionsArgs = {
  year: Scalars['Int'];
};


export type MutationinvalidateMandateArgs = {
  mandate: MandateWhereUniqueInput;
};


export type MutationloginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationregisterArgs = {
  data?: InputMaybe<RegisterInput>;
};


export type MutationrejectPaperMandateArgs = {
  mandate: PaperMandateWhereUniqueInput;
  reason: Scalars['String'];
};


export type MutationrequestResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationrequestVerifyEmailArgs = {
  email: Scalars['String'];
};


export type MutationresetPasswordArgs = {
  password: Scalars['String'];
  passwordRepeat: Scalars['String'];
  token: Scalars['String'];
};


export type MutationsendContactFormArgs = {
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
  recaptcha: Scalars['String'];
  subject: Scalars['String'];
};


export type MutationsendMandateRemindersArgs = {
  beforeDate: Scalars['Date'];
};


export type MutationupdateBankArgs = {
  data: BankUpdateInput;
  where: BankWhereUniqueInput;
};


export type MutationupdateBoardPeriodArgs = {
  data: BoardPeriodUpdateInput;
  where: BoardPeriodWhereUniqueInput;
};


export type MutationupdateCommitteeArgs = {
  data: CommitteeUpdateInput;
  where: CommitteeWhereUniqueInput;
};


export type MutationupdateCommitteePeriodArgs = {
  data: CommitteePeriodUpdateInput;
  where: CommitteePeriodWhereUniqueInput;
};


export type MutationupdateDirectDebitArgs = {
  data: DirectDebitUpdateInput;
  where: DirectDebitWhereUniqueInput;
};


export type MutationupdateDirectDebitBatchArgs = {
  data: DirectDebitBatchUpdateInput;
  where: DirectDebitBatchWhereUniqueInput;
};


export type MutationupdateDirectDebitInstructionArgs = {
  data: DirectDebitInstructionUpdateInput;
  where: DirectDebitInstructionWhereUniqueInput;
};


export type MutationupdateDirectDebitWarningArgs = {
  data: DirectDebitWarningUpdateInput;
  where: DirectDebitWarningWhereUniqueInput;
};


export type MutationupdateEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationupdateFileArgs = {
  data: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationupdateGroupArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};


export type MutationupdateMandateArgs = {
  data: MandateUpdateInput;
  where: MandateWhereUniqueInput;
};


export type MutationupdateMemberArgs = {
  data: MemberUpdateInput;
  where: MemberWhereUniqueInput;
};


export type MutationupdateMembershipArgs = {
  data: MembershipUpdateInput;
  where: MembershipWhereUniqueInput;
};


export type MutationupdateMembershipFeeTransactionArgs = {
  data: MembershipFeeTransactionUpdateInput;
  where: MembershipFeeTransactionWhereUniqueInput;
};


export type MutationupdateMembershipTypeArgs = {
  data: MembershipTypeUpdateInput;
  where: MembershipTypeWhereUniqueInput;
};


export type MutationupdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationupdateParticipationArgs = {
  data: ParticipationUpdateInput;
  where: ParticipationWhereUniqueInput;
};


export type MutationupdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationupdateProductBrandArgs = {
  data: ProductBrandUpdateInput;
  where: ProductBrandWhereUniqueInput;
};


export type MutationupdateProductCategoryArgs = {
  data: ProductCategoryUpdateInput;
  where: ProductCategoryWhereUniqueInput;
};


export type MutationupdateProductSizeArgs = {
  data: ProductSizeUpdateInput;
  where: ProductSizeWhereUniqueInput;
};


export type MutationupdateProductSubproductArgs = {
  data: ProductSubproductUpdateInput;
  where: ProductSubproductWhereUniqueInput;
};


export type MutationupdateProviderArgs = {
  data: ProviderUpdateInput;
  where: ProviderWhereUniqueInput;
};


export type MutationupdateSettingArgs = {
  data: SettingUpdateInput;
  where: SettingWhereUniqueInput;
};


export type MutationupdateTokenArgs = {
  data: TokenUpdateInput;
  where: TokenWhereUniqueInput;
};


export type MutationupdateTransactionArgs = {
  data: TransactionUpdateInput;
  where: TransactionWhereUniqueInput;
};


export type MutationuploadMemberImageArgs = {
  file: Scalars['Upload'];
  member: MemberWhereUniqueInput;
};


export type MutationuploadPaperMandateArgs = {
  file: Scalars['Upload'];
  paperMandate: PaperMandateWhereUniqueInput;
};


export type MutationverifyEmailArgs = {
  token: Scalars['String'];
};

export enum OrderByArg {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type Page = {
  __typename?: 'Page';
  body: LongTranslatable;
  id: Scalars['String'];
  title: ShortTranslatable;
};

export type PageCreateInput = {
  body?: InputMaybe<LongTranslatableCreateInput>;
  id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<ShortTranslatableCreateInput>;
};

export type PageList = {
  __typename?: 'PageList';
  info: ListInfo;
  values: Array<Page>;
};

export type PageOrderByInput = {
  body?: InputMaybe<LongTranslatableOrderByInput>;
  id?: InputMaybe<OrderByArg>;
  title?: InputMaybe<ShortTranslatableOrderByInput>;
};

export type PageUpdateInput = {
  body?: InputMaybe<LongTranslatableUpdateInput>;
  id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<ShortTranslatableUpdateInput>;
};

export type PageWhereInput = {
  AND?: InputMaybe<Array<PageWhereInput>>;
  OR?: InputMaybe<Array<PageWhereInput>>;
  body?: InputMaybe<LongTranslatableWhereInput>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<ShortTranslatableWhereInput>;
};

export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type PaperMandate = Mandate & {
  __typename?: 'PaperMandate';
  acceptedAt?: Maybe<Scalars['DateTime']>;
  bic: Scalars['String'];
  createdAt: Scalars['DateTime'];
  errorMessage?: Maybe<Scalars['String']>;
  generatedFile?: Maybe<File>;
  iban?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  instructions: DirectDebitInstructionList;
  isFirstTransaction: Scalars['Boolean'];
  mandateId: Scalars['String'];
  member: Member;
  reason: Scalars['String'];
  status: MandateStatus;
  uploadedFile?: Maybe<File>;
};


export type PaperMandateinstructionsArgs = {
  orderBy?: InputMaybe<DirectDebitInstructionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitInstructionWhereInput>;
};

export type PaperMandateCreateInput = {
  acceptedAt?: InputMaybe<Scalars['DateTime']>;
  bic?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  generatedFile?: InputMaybe<FileCreateRelationInput>;
  iban?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Array<DirectDebitInstructionCreateRelationInput>>;
  isFirstTransaction?: InputMaybe<Scalars['Boolean']>;
  mandateId?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberCreateRelationInput>;
  reason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MandateStatus>;
  uploadedFile?: InputMaybe<FileCreateRelationInput>;
};

export type PaperMandateList = {
  __typename?: 'PaperMandateList';
  info: ListInfo;
  values: Array<PaperMandate>;
};

export type PaperMandateOrderByInput = {
  acceptedAt?: InputMaybe<OrderByArg>;
  bic?: InputMaybe<OrderByArg>;
  createdAt?: InputMaybe<OrderByArg>;
  errorMessage?: InputMaybe<OrderByArg>;
  generatedFile?: InputMaybe<FileOrderByInput>;
  iban?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  isFirstTransaction?: InputMaybe<OrderByArg>;
  mandateId?: InputMaybe<OrderByArg>;
  member?: InputMaybe<MemberOrderByInput>;
  reason?: InputMaybe<OrderByArg>;
  status?: InputMaybe<OrderByArg>;
  uploadedFile?: InputMaybe<FileOrderByInput>;
};

export type PaperMandateUpdateInput = {
  acceptedAt?: InputMaybe<Scalars['DateTime']>;
  bic?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  generatedFile?: InputMaybe<FileUpdateRelationInput>;
  iban?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Array<DirectDebitInstructionUpdateRelationInput>>;
  isFirstTransaction?: InputMaybe<Scalars['Boolean']>;
  mandateId?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberUpdateRelationInput>;
  reason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MandateStatus>;
  uploadedFile?: InputMaybe<FileUpdateRelationInput>;
};

export type PaperMandateWhereInput = {
  AND?: InputMaybe<Array<PaperMandateWhereInput>>;
  OR?: InputMaybe<Array<PaperMandateWhereInput>>;
  acceptedAt?: InputMaybe<DateTimeFilter>;
  bic?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  errorMessage?: InputMaybe<StringFilter>;
  generatedFile?: InputMaybe<FileWhereInput>;
  iban?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  instructions?: InputMaybe<DirectDebitInstructionWhereInput>;
  isFirstTransaction?: InputMaybe<Scalars['Boolean']>;
  mandateId?: InputMaybe<StringFilter>;
  member?: InputMaybe<MemberWhereInput>;
  reason?: InputMaybe<StringFilter>;
  status?: InputMaybe<MandateStatusFilter>;
  uploadedFile?: InputMaybe<FileWhereInput>;
};

export type PaperMandateWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Participation = {
  __typename?: 'Participation';
  createdAt: Scalars['DateTime'];
  event: Event;
  id: Scalars['String'];
  member: Member;
};

export type ParticipationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event?: InputMaybe<EventCreateRelationInput>;
  id?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberCreateRelationInput>;
};

export type ParticipationCreateRelationInput = {
  connect?: InputMaybe<ParticipationWhereUniqueInput>;
  create?: InputMaybe<ParticipationCreateInput>;
};

export type ParticipationList = {
  __typename?: 'ParticipationList';
  info: ListInfo;
  values: Array<Participation>;
};

export type ParticipationOrderByInput = {
  createdAt?: InputMaybe<OrderByArg>;
  event?: InputMaybe<EventOrderByInput>;
  id?: InputMaybe<OrderByArg>;
  member?: InputMaybe<MemberOrderByInput>;
};

export type ParticipationUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event?: InputMaybe<EventUpdateRelationInput>;
  id?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberUpdateRelationInput>;
};

export type ParticipationUpdateRelationInput = {
  connect?: InputMaybe<ParticipationWhereUniqueInput>;
  create?: InputMaybe<ParticipationCreateInput>;
  disconnect?: InputMaybe<ParticipationWhereUniqueInput>;
};

export type ParticipationWhereInput = {
  AND?: InputMaybe<Array<ParticipationWhereInput>>;
  OR?: InputMaybe<Array<ParticipationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventWhereInput>;
  id?: InputMaybe<StringFilter>;
  member?: InputMaybe<MemberWhereInput>;
};

export type ParticipationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  brand: ProductBrand;
  category: ProductCategory;
  id: Scalars['String'];
  name: Scalars['String'];
  sizes: ProductSizeList;
  subproducts: ProductSubproductList;
};


export type ProductsizesArgs = {
  orderBy?: InputMaybe<ProductSizeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductSizeWhereInput>;
};


export type ProductsubproductsArgs = {
  orderBy?: InputMaybe<ProductSubproductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductSubproductWhereInput>;
};

export type ProductBrand = {
  __typename?: 'ProductBrand';
  id: Scalars['String'];
  name: Scalars['String'];
  products: ProductList;
};


export type ProductBrandproductsArgs = {
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductBrandCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Array<ProductCreateRelationInput>>;
};

export type ProductBrandCreateRelationInput = {
  connect?: InputMaybe<ProductBrandWhereUniqueInput>;
  create?: InputMaybe<ProductBrandCreateInput>;
};

export type ProductBrandList = {
  __typename?: 'ProductBrandList';
  info: ListInfo;
  values: Array<ProductBrand>;
};

export type ProductBrandOrderByInput = {
  id?: InputMaybe<OrderByArg>;
  name?: InputMaybe<OrderByArg>;
};

export type ProductBrandUpdateInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Array<ProductUpdateRelationInput>>;
};

export type ProductBrandUpdateRelationInput = {
  connect?: InputMaybe<ProductBrandWhereUniqueInput>;
  create?: InputMaybe<ProductBrandCreateInput>;
  disconnect?: InputMaybe<ProductBrandWhereUniqueInput>;
};

export type ProductBrandWhereInput = {
  AND?: InputMaybe<Array<ProductBrandWhereInput>>;
  OR?: InputMaybe<Array<ProductBrandWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductWhereInput>;
};

export type ProductBrandWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  children: ProductCategoryList;
  id: Scalars['String'];
  name: Scalars['String'];
  parent?: Maybe<ProductCategory>;
  products: ProductList;
  profitAmount: Scalars['Int'];
  profitPercentage: Scalars['Int'];
};


export type ProductCategorychildrenArgs = {
  orderBy?: InputMaybe<ProductCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductCategoryWhereInput>;
};


export type ProductCategoryproductsArgs = {
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductCategoryCreateInput = {
  children?: InputMaybe<Array<ProductCategoryCreateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<ProductCategoryCreateRelationInput>;
  products?: InputMaybe<Array<ProductCreateRelationInput>>;
  profitAmount?: InputMaybe<Scalars['Float']>;
  profitPercentage?: InputMaybe<Scalars['Float']>;
};

export type ProductCategoryCreateRelationInput = {
  connect?: InputMaybe<ProductCategoryWhereUniqueInput>;
  create?: InputMaybe<ProductCategoryCreateInput>;
};

export type ProductCategoryList = {
  __typename?: 'ProductCategoryList';
  info: ListInfo;
  values: Array<ProductCategory>;
};

export type ProductCategoryOrderByInput = {
  id?: InputMaybe<OrderByArg>;
  name?: InputMaybe<OrderByArg>;
  parent?: InputMaybe<ProductCategoryOrderByInput>;
  profitAmount?: InputMaybe<OrderByArg>;
  profitPercentage?: InputMaybe<OrderByArg>;
};

export type ProductCategoryUpdateInput = {
  children?: InputMaybe<Array<ProductCategoryUpdateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<ProductCategoryUpdateRelationInput>;
  products?: InputMaybe<Array<ProductUpdateRelationInput>>;
  profitAmount?: InputMaybe<Scalars['Float']>;
  profitPercentage?: InputMaybe<Scalars['Float']>;
};

export type ProductCategoryUpdateRelationInput = {
  connect?: InputMaybe<ProductCategoryWhereUniqueInput>;
  create?: InputMaybe<ProductCategoryCreateInput>;
  disconnect?: InputMaybe<ProductCategoryWhereUniqueInput>;
};

export type ProductCategoryWhereInput = {
  AND?: InputMaybe<Array<ProductCategoryWhereInput>>;
  OR?: InputMaybe<Array<ProductCategoryWhereInput>>;
  children?: InputMaybe<ProductCategoryWhereInput>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  parent?: InputMaybe<ProductCategoryWhereInput>;
  products?: InputMaybe<ProductWhereInput>;
  profitAmount?: InputMaybe<IntFilter>;
  profitPercentage?: InputMaybe<IntFilter>;
};

export type ProductCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ProductCreateInput = {
  brand?: InputMaybe<ProductBrandCreateRelationInput>;
  category?: InputMaybe<ProductCategoryCreateRelationInput>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  sizes?: InputMaybe<Array<ProductSizeCreateRelationInput>>;
  subproducts?: InputMaybe<Array<ProductSubproductCreateRelationInput>>;
};

export type ProductCreateRelationInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  create?: InputMaybe<ProductCreateInput>;
};

export type ProductList = {
  __typename?: 'ProductList';
  info: ListInfo;
  values: Array<Product>;
};

export type ProductOrderByInput = {
  brand?: InputMaybe<ProductBrandOrderByInput>;
  category?: InputMaybe<ProductCategoryOrderByInput>;
  id?: InputMaybe<OrderByArg>;
  name?: InputMaybe<OrderByArg>;
};

export type ProductSize = {
  __typename?: 'ProductSize';
  amount: Scalars['Int'];
  defaultPrice: Scalars['Int'];
  id: Scalars['String'];
  name: Scalars['String'];
  product: Product;
  unit: Unit;
};

export type ProductSizeCreateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  defaultPrice?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<ProductCreateRelationInput>;
  unit?: InputMaybe<Unit>;
};

export type ProductSizeCreateRelationInput = {
  connect?: InputMaybe<ProductSizeWhereUniqueInput>;
  create?: InputMaybe<ProductSizeCreateInput>;
};

export type ProductSizeList = {
  __typename?: 'ProductSizeList';
  info: ListInfo;
  values: Array<ProductSize>;
};

export type ProductSizeOrderByInput = {
  amount?: InputMaybe<OrderByArg>;
  defaultPrice?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  name?: InputMaybe<OrderByArg>;
  product?: InputMaybe<ProductOrderByInput>;
  unit?: InputMaybe<OrderByArg>;
};

export type ProductSizeUpdateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  defaultPrice?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<ProductUpdateRelationInput>;
  unit?: InputMaybe<Unit>;
};

export type ProductSizeUpdateRelationInput = {
  connect?: InputMaybe<ProductSizeWhereUniqueInput>;
  create?: InputMaybe<ProductSizeCreateInput>;
  disconnect?: InputMaybe<ProductSizeWhereUniqueInput>;
};

export type ProductSizeWhereInput = {
  AND?: InputMaybe<Array<ProductSizeWhereInput>>;
  OR?: InputMaybe<Array<ProductSizeWhereInput>>;
  amount?: InputMaybe<IntFilter>;
  defaultPrice?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductWhereInput>;
  unit?: InputMaybe<UnitFilter>;
};

export type ProductSizeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ProductSubproduct = {
  __typename?: 'ProductSubproduct';
  amount: Scalars['Int'];
  id: Scalars['String'];
  product: Product;
  size: ProductSize;
};

export type ProductSubproductCreateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<ProductCreateRelationInput>;
  size?: InputMaybe<ProductSizeCreateRelationInput>;
};

export type ProductSubproductCreateRelationInput = {
  connect?: InputMaybe<ProductSubproductWhereUniqueInput>;
  create?: InputMaybe<ProductSubproductCreateInput>;
};

export type ProductSubproductList = {
  __typename?: 'ProductSubproductList';
  info: ListInfo;
  values: Array<ProductSubproduct>;
};

export type ProductSubproductOrderByInput = {
  amount?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  product?: InputMaybe<ProductOrderByInput>;
  size?: InputMaybe<ProductSizeOrderByInput>;
};

export type ProductSubproductUpdateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<ProductUpdateRelationInput>;
  size?: InputMaybe<ProductSizeUpdateRelationInput>;
};

export type ProductSubproductUpdateRelationInput = {
  connect?: InputMaybe<ProductSubproductWhereUniqueInput>;
  create?: InputMaybe<ProductSubproductCreateInput>;
  disconnect?: InputMaybe<ProductSubproductWhereUniqueInput>;
};

export type ProductSubproductWhereInput = {
  AND?: InputMaybe<Array<ProductSubproductWhereInput>>;
  OR?: InputMaybe<Array<ProductSubproductWhereInput>>;
  amount?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductWhereInput>;
  size?: InputMaybe<ProductSizeWhereInput>;
};

export type ProductSubproductWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ProductUpdateInput = {
  brand?: InputMaybe<ProductBrandUpdateRelationInput>;
  category?: InputMaybe<ProductCategoryUpdateRelationInput>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  sizes?: InputMaybe<Array<ProductSizeUpdateRelationInput>>;
  subproducts?: InputMaybe<Array<ProductSubproductUpdateRelationInput>>;
};

export type ProductUpdateRelationInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  create?: InputMaybe<ProductCreateInput>;
  disconnect?: InputMaybe<ProductWhereUniqueInput>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  brand?: InputMaybe<ProductBrandWhereInput>;
  category?: InputMaybe<ProductCategoryWhereInput>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  sizes?: InputMaybe<ProductSizeWhereInput>;
  subproducts?: InputMaybe<ProductSubproductWhereInput>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum Pronouns {
  HE_HIM = 'HE_HIM',
  SHE_HER = 'SHE_HER',
  THEY_THEM = 'THEY_THEM'
}

export type PronounsFilter = {
  equals?: InputMaybe<Pronouns>;
  in?: InputMaybe<Array<Pronouns>>;
  not?: InputMaybe<Pronouns>;
  notIn?: InputMaybe<Array<Pronouns>>;
};

export type Provider = {
  __typename?: 'Provider';
  email: Scalars['String'];
  id: Scalars['String'];
  isVerified: Scalars['Boolean'];
  type: Scalars['String'];
  user: Member;
};

export type ProviderCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<MemberCreateRelationInput>;
};

export type ProviderCreateRelationInput = {
  connect?: InputMaybe<ProviderWhereUniqueInput>;
  create?: InputMaybe<ProviderCreateInput>;
};

export type ProviderList = {
  __typename?: 'ProviderList';
  info: ListInfo;
  values: Array<Provider>;
};

export type ProviderOrderByInput = {
  email?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  isVerified?: InputMaybe<OrderByArg>;
  type?: InputMaybe<OrderByArg>;
  user?: InputMaybe<MemberOrderByInput>;
};

export type ProviderUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<MemberUpdateRelationInput>;
};

export type ProviderUpdateRelationInput = {
  connect?: InputMaybe<ProviderWhereUniqueInput>;
  create?: InputMaybe<ProviderCreateInput>;
  disconnect?: InputMaybe<ProviderWhereUniqueInput>;
};

export type ProviderWhereInput = {
  AND?: InputMaybe<Array<ProviderWhereInput>>;
  OR?: InputMaybe<Array<ProviderWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<MemberWhereInput>;
};

export type ProviderWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  bank: Bank;
  banks: BankList;
  boardPeriod: BoardPeriod;
  boardPeriods: BoardPeriodList;
  committee: Committee;
  committeePeriod: CommitteePeriod;
  committeePeriods: CommitteePeriodList;
  committees: CommitteeList;
  digitalMandate: DigitalMandate;
  digitalMandates: DigitalMandateList;
  directDebit: DirectDebit;
  directDebitBatch: DirectDebitBatch;
  directDebitBatches: DirectDebitBatchList;
  directDebitInstruction: DirectDebitInstruction;
  directDebitInstructions: DirectDebitInstructionList;
  directDebitWarning: DirectDebitWarning;
  directDebitWarnings: DirectDebitWarningList;
  directDebits: DirectDebitList;
  entries: EntryList;
  entry: Entry;
  entryConsumption: EntryConsumption;
  entryConsumptions: EntryConsumptionList;
  entryProduction: EntryProduction;
  entryProductions: EntryProductionList;
  event: Event;
  events: EventList;
  file: File;
  files: FileList;
  group: Group;
  groups: GroupList;
  mandate: Mandate;
  mandates: MandateList;
  me?: Maybe<Member>;
  member: Member;
  members: MemberList;
  membership: Membership;
  membershipFeeTransaction: MembershipFeeTransaction;
  membershipFeeTransactions: MembershipFeeTransactionList;
  membershipType: MembershipType;
  membershipTypes: MembershipTypeList;
  memberships: MembershipList;
  page: Page;
  pages: PageList;
  paperMandate: PaperMandate;
  paperMandates: PaperMandateList;
  participation: Participation;
  participations: ParticipationList;
  product: Product;
  productBrand: ProductBrand;
  productBrands: ProductBrandList;
  productCategories: ProductCategoryList;
  productCategory: ProductCategory;
  productSize: ProductSize;
  productSizes: ProductSizeList;
  productSubproduct: ProductSubproduct;
  productSubproducts: ProductSubproductList;
  products: ProductList;
  provider: Provider;
  providers: ProviderList;
  setting: Setting;
  settings: SettingList;
  token: Token;
  tokens: TokenList;
  transaction: Transaction;
  transactions: TransactionList;
};


export type QuerybankArgs = {
  where: BankWhereUniqueInput;
};


export type QuerybanksArgs = {
  orderBy?: InputMaybe<BankOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BankWhereInput>;
};


export type QueryboardPeriodArgs = {
  where: BoardPeriodWhereUniqueInput;
};


export type QueryboardPeriodsArgs = {
  orderBy?: InputMaybe<BoardPeriodOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BoardPeriodWhereInput>;
};


export type QuerycommitteeArgs = {
  where: CommitteeWhereUniqueInput;
};


export type QuerycommitteePeriodArgs = {
  where: CommitteePeriodWhereUniqueInput;
};


export type QuerycommitteePeriodsArgs = {
  orderBy?: InputMaybe<CommitteePeriodOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommitteePeriodWhereInput>;
};


export type QuerycommitteesArgs = {
  orderBy?: InputMaybe<CommitteeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommitteeWhereInput>;
};


export type QuerydigitalMandateArgs = {
  where: DigitalMandateWhereUniqueInput;
};


export type QuerydigitalMandatesArgs = {
  orderBy?: InputMaybe<DigitalMandateOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DigitalMandateWhereInput>;
};


export type QuerydirectDebitArgs = {
  where: DirectDebitWhereUniqueInput;
};


export type QuerydirectDebitBatchArgs = {
  where: DirectDebitBatchWhereUniqueInput;
};


export type QuerydirectDebitBatchesArgs = {
  orderBy?: InputMaybe<DirectDebitBatchOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitBatchWhereInput>;
};


export type QuerydirectDebitInstructionArgs = {
  where: DirectDebitInstructionWhereUniqueInput;
};


export type QuerydirectDebitInstructionsArgs = {
  orderBy?: InputMaybe<DirectDebitInstructionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitInstructionWhereInput>;
};


export type QuerydirectDebitWarningArgs = {
  where: DirectDebitWarningWhereUniqueInput;
};


export type QuerydirectDebitWarningsArgs = {
  orderBy?: InputMaybe<DirectDebitWarningOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitWarningWhereInput>;
};


export type QuerydirectDebitsArgs = {
  orderBy?: InputMaybe<DirectDebitOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitWhereInput>;
};


export type QueryentriesArgs = {
  orderBy?: InputMaybe<EntryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryWhereInput>;
};


export type QueryentryArgs = {
  where: EntryWhereUniqueInput;
};


export type QueryentryConsumptionArgs = {
  where: EntryConsumptionWhereUniqueInput;
};


export type QueryentryConsumptionsArgs = {
  orderBy?: InputMaybe<EntryConsumptionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryConsumptionWhereInput>;
};


export type QueryentryProductionArgs = {
  where: EntryProductionWhereUniqueInput;
};


export type QueryentryProductionsArgs = {
  orderBy?: InputMaybe<EntryProductionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryProductionWhereInput>;
};


export type QueryeventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryeventsArgs = {
  orderBy?: InputMaybe<EventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryfileArgs = {
  where: FileWhereUniqueInput;
};


export type QueryfilesArgs = {
  orderBy?: InputMaybe<FileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QuerygroupArgs = {
  where: GroupWhereUniqueInput;
};


export type QuerygroupsArgs = {
  orderBy?: InputMaybe<GroupOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GroupWhereInput>;
};


export type QuerymandateArgs = {
  where: MandateWhereUniqueInput;
};


export type QuerymandatesArgs = {
  orderBy?: InputMaybe<MandateOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MandateWhereInput>;
};


export type QuerymemberArgs = {
  where: MemberWhereUniqueInput;
};


export type QuerymembersArgs = {
  orderBy?: InputMaybe<MemberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MemberWhereInput>;
};


export type QuerymembershipArgs = {
  where: MembershipWhereUniqueInput;
};


export type QuerymembershipFeeTransactionArgs = {
  where: MembershipFeeTransactionWhereUniqueInput;
};


export type QuerymembershipFeeTransactionsArgs = {
  orderBy?: InputMaybe<MembershipFeeTransactionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MembershipFeeTransactionWhereInput>;
};


export type QuerymembershipTypeArgs = {
  where: MembershipTypeWhereUniqueInput;
};


export type QuerymembershipTypesArgs = {
  orderBy?: InputMaybe<MembershipTypeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MembershipTypeWhereInput>;
};


export type QuerymembershipsArgs = {
  orderBy?: InputMaybe<MembershipOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MembershipWhereInput>;
};


export type QuerypageArgs = {
  where: PageWhereUniqueInput;
};


export type QuerypagesArgs = {
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageWhereInput>;
};


export type QuerypaperMandateArgs = {
  where: PaperMandateWhereUniqueInput;
};


export type QuerypaperMandatesArgs = {
  orderBy?: InputMaybe<PaperMandateOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PaperMandateWhereInput>;
};


export type QueryparticipationArgs = {
  where: ParticipationWhereUniqueInput;
};


export type QueryparticipationsArgs = {
  orderBy?: InputMaybe<ParticipationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ParticipationWhereInput>;
};


export type QueryproductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryproductBrandArgs = {
  where: ProductBrandWhereUniqueInput;
};


export type QueryproductBrandsArgs = {
  orderBy?: InputMaybe<ProductBrandOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductBrandWhereInput>;
};


export type QueryproductCategoriesArgs = {
  orderBy?: InputMaybe<ProductCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductCategoryWhereInput>;
};


export type QueryproductCategoryArgs = {
  where: ProductCategoryWhereUniqueInput;
};


export type QueryproductSizeArgs = {
  where: ProductSizeWhereUniqueInput;
};


export type QueryproductSizesArgs = {
  orderBy?: InputMaybe<ProductSizeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductSizeWhereInput>;
};


export type QueryproductSubproductArgs = {
  where: ProductSubproductWhereUniqueInput;
};


export type QueryproductSubproductsArgs = {
  orderBy?: InputMaybe<ProductSubproductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductSubproductWhereInput>;
};


export type QueryproductsArgs = {
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryproviderArgs = {
  where: ProviderWhereUniqueInput;
};


export type QueryprovidersArgs = {
  orderBy?: InputMaybe<ProviderOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProviderWhereInput>;
};


export type QuerysettingArgs = {
  where: SettingWhereUniqueInput;
};


export type QuerysettingsArgs = {
  orderBy?: InputMaybe<SettingOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingWhereInput>;
};


export type QuerytokenArgs = {
  where: TokenWhereUniqueInput;
};


export type QuerytokensArgs = {
  orderBy?: InputMaybe<TokenOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenWhereInput>;
};


export type QuerytransactionArgs = {
  where: TransactionWhereUniqueInput;
};


export type QuerytransactionsArgs = {
  orderBy?: InputMaybe<TransactionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionWhereInput>;
};

export type RegisterInput = {
  address: Scalars['String'];
  birthdate: Scalars['Date'];
  city: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  initials: Scalars['String'];
  language: Language;
  lastName: Scalars['String'];
  password: Scalars['String'];
  passwordRepeat: Scalars['String'];
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
  pronouns: Pronouns;
  studentType: StudentType;
};

export enum SequenceType {
  FINAL = 'FINAL',
  FIRST = 'FIRST',
  ONE_OFF = 'ONE_OFF',
  RECURRENT = 'RECURRENT'
}

export type SequenceTypeFilter = {
  equals?: InputMaybe<SequenceType>;
  in?: InputMaybe<Array<SequenceType>>;
  not?: InputMaybe<SequenceType>;
  notIn?: InputMaybe<Array<SequenceType>>;
};

export type Setting = {
  __typename?: 'Setting';
  isPublic: Scalars['Boolean'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type SettingCreateInput = {
  isPublic?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type SettingList = {
  __typename?: 'SettingList';
  info: ListInfo;
  values: Array<Setting>;
};

export type SettingOrderByInput = {
  isPublic?: InputMaybe<OrderByArg>;
  key?: InputMaybe<OrderByArg>;
  value?: InputMaybe<OrderByArg>;
};

export type SettingUpdateInput = {
  isPublic?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type SettingWhereInput = {
  AND?: InputMaybe<Array<SettingWhereInput>>;
  OR?: InputMaybe<Array<SettingWhereInput>>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type SettingWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ShortTranslatable = Translatable & {
  __typename?: 'ShortTranslatable';
  en?: Maybe<Scalars['String']>;
  nl?: Maybe<Scalars['String']>;
};

export type ShortTranslatableCreateInput = {
  en?: InputMaybe<Scalars['String']>;
  nl?: InputMaybe<Scalars['String']>;
};

export type ShortTranslatableOrderByInput = {
  en?: InputMaybe<OrderByArg>;
  nl?: InputMaybe<OrderByArg>;
};

export type ShortTranslatableUpdateInput = {
  en?: InputMaybe<Scalars['String']>;
  nl?: InputMaybe<Scalars['String']>;
};

export type ShortTranslatableWhereInput = {
  AND?: InputMaybe<Array<ShortTranslatableWhereInput>>;
  OR?: InputMaybe<Array<ShortTranslatableWhereInput>>;
  en?: InputMaybe<StringFilter>;
  nl?: InputMaybe<StringFilter>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum StudentType {
  HBO_OTHER = 'HBO_OTHER',
  HBO_SAXION = 'HBO_SAXION',
  MBO = 'MBO',
  UNIVERSITY_OTHER = 'UNIVERSITY_OTHER',
  UNIVERSITY_UT = 'UNIVERSITY_UT',
  WORKING = 'WORKING'
}

export type StudentTypeFilter = {
  equals?: InputMaybe<StudentType>;
  in?: InputMaybe<Array<StudentType>>;
  not?: InputMaybe<StudentType>;
  notIn?: InputMaybe<Array<StudentType>>;
};

export type Token = {
  __typename?: 'Token';
  expiresAt: Scalars['DateTime'];
  id: Scalars['String'];
  provider: Provider;
  token: Scalars['String'];
  type: TokenType;
};

export type TokenCreateInput = {
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<ProviderCreateRelationInput>;
  token?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TokenType>;
};

export type TokenList = {
  __typename?: 'TokenList';
  info: ListInfo;
  values: Array<Token>;
};

export type TokenOrderByInput = {
  expiresAt?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  provider?: InputMaybe<ProviderOrderByInput>;
  token?: InputMaybe<OrderByArg>;
  type?: InputMaybe<OrderByArg>;
};

export enum TokenType {
  RESET_PASSWORD = 'RESET_PASSWORD',
  VERIFY_EMAIL = 'VERIFY_EMAIL'
}

export type TokenTypeFilter = {
  equals?: InputMaybe<TokenType>;
  in?: InputMaybe<Array<TokenType>>;
  not?: InputMaybe<TokenType>;
  notIn?: InputMaybe<Array<TokenType>>;
};

export type TokenUpdateInput = {
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<ProviderUpdateRelationInput>;
  token?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TokenType>;
};

export type TokenWhereInput = {
  AND?: InputMaybe<Array<TokenWhereInput>>;
  OR?: InputMaybe<Array<TokenWhereInput>>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  provider?: InputMaybe<ProviderWhereInput>;
  token?: InputMaybe<StringFilter>;
  type?: InputMaybe<TokenTypeFilter>;
};

export type TokenWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type Transaction = {
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  instruction?: Maybe<DirectDebitInstruction>;
  member: Member;
  updatedAt: Scalars['DateTime'];
};

export type TransactionCreateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instruction?: InputMaybe<DirectDebitInstructionCreateRelationInput>;
  member?: InputMaybe<MemberCreateRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TransactionCreateRelationInput = {
  connect?: InputMaybe<TransactionWhereUniqueInput>;
  create?: InputMaybe<TransactionCreateInput>;
};

export type TransactionList = {
  __typename?: 'TransactionList';
  info: ListInfo;
  values: Array<Transaction>;
};

export type TransactionOrderByInput = {
  amount?: InputMaybe<OrderByArg>;
  createdAt?: InputMaybe<OrderByArg>;
  description?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  instruction?: InputMaybe<DirectDebitInstructionOrderByInput>;
  member?: InputMaybe<MemberOrderByInput>;
  updatedAt?: InputMaybe<OrderByArg>;
};

export type TransactionUpdateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instruction?: InputMaybe<DirectDebitInstructionUpdateRelationInput>;
  member?: InputMaybe<MemberUpdateRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TransactionUpdateRelationInput = {
  connect?: InputMaybe<TransactionWhereUniqueInput>;
  create?: InputMaybe<TransactionCreateInput>;
  disconnect?: InputMaybe<TransactionWhereUniqueInput>;
};

export type TransactionWhereInput = {
  AND?: InputMaybe<Array<TransactionWhereInput>>;
  OR?: InputMaybe<Array<TransactionWhereInput>>;
  amount?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  instruction?: InputMaybe<DirectDebitInstructionWhereInput>;
  member?: InputMaybe<MemberWhereInput>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TransactionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Translatable = {
  en?: Maybe<Scalars['String']>;
  nl?: Maybe<Scalars['String']>;
};

export enum Unit {
  GRAM = 'GRAM',
  MILLILITRE = 'MILLILITRE',
  NONE = 'NONE'
}

export type UnitFilter = {
  equals?: InputMaybe<Unit>;
  in?: InputMaybe<Array<Unit>>;
  not?: InputMaybe<Unit>;
  notIn?: InputMaybe<Array<Unit>>;
};

export type ProductBrandFragment = { __typename?: 'ProductBrand', id: string, name: string };

export type ProductCategoryFragment = { __typename?: 'ProductCategory', id: string, name: string, profitAmount: number, profitPercentage: number };

export type GetProductBrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductBrandsQuery = { __typename?: 'Query', productBrands: { __typename?: 'ProductBrandList', values: Array<{ __typename?: 'ProductBrand', id: string, name: string }> } };

export const ProductBrandFragmentDoc = gql`
    fragment ProductBrandFragment on ProductBrand {
  id
  name
}
    `;
export const ProductCategoryFragmentDoc = gql`
    fragment ProductCategoryFragment on ProductCategory {
  id
  name
  profitAmount
  profitPercentage
}
    `;
export const GetProductBrandsDocument = gql`
    query GetProductBrands {
  productBrands {
    values {
      ...ProductBrandFragment
    }
  }
}
    ${ProductBrandFragmentDoc}`;

/**
 * __useGetProductBrandsQuery__
 *
 * To run a query within a React component, call `useGetProductBrandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductBrandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductBrandsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductBrandsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductBrandsQuery, GetProductBrandsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductBrandsQuery, GetProductBrandsQueryVariables>(GetProductBrandsDocument, options);
      }
export function useGetProductBrandsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductBrandsQuery, GetProductBrandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductBrandsQuery, GetProductBrandsQueryVariables>(GetProductBrandsDocument, options);
        }
export type GetProductBrandsQueryHookResult = ReturnType<typeof useGetProductBrandsQuery>;
export type GetProductBrandsLazyQueryHookResult = ReturnType<typeof useGetProductBrandsLazyQuery>;
export type GetProductBrandsQueryResult = Apollo.QueryResult<GetProductBrandsQuery, GetProductBrandsQueryVariables>;