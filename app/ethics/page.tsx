import { PageHeader } from "@/components/layout/page-header";
import { Callout } from "@/components/ui/callout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, FileCheck, Heart, Lock, Shield, Users } from "lucide-react";

export default function Ethics() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader
        title="Ethics & Privacy"
        description="Our commitment to ethical research, privacy protection, and child-centered practice"
      />

      <Callout type="success" title="Our Commitment" className="mb-12">
        This research prioritizes the dignity, safety, privacy, and wellbeing of
        the child above all research objectives. Every aspect of this work is
        conducted with transparency, consent, and ethical oversight.
      </Callout>

      <div className="space-y-12">
        {/* Core Ethical Principles */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Core Ethical Principles
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-red-500" />
                  <CardTitle>Child-First Approach</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">
                  The child&apos;s experience, comfort, and autonomy are
                  paramount. Research activities stop immediately if there are
                  any signs of distress, fatigue, or disinterest.
                </p>
                <div className="bg-red-50 rounded p-3 text-sm text-gray-700">
                  <strong>Practice:</strong> Sessions are voluntary, flexible,
                  and always conducted in a supportive, positive environment
                  with trusted caregivers present.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileCheck className="h-6 w-6 text-blue-500" />
                  <CardTitle>Informed Consent</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">
                  Full informed consent has been obtained from
                  parents/guardians. They understand the research purpose,
                  methods, and their right to withdraw at any time without
                  consequence.
                </p>
                <div className="bg-blue-50 rounded p-3 text-sm text-gray-700">
                  <strong>Transparency:</strong> Ongoing communication ensures
                  guardians are informed of all activities, findings, and future
                  directions.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-green-500" />
                  <CardTitle>Anonymity Protection</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">
                  No personally identifiable information is shared publicly. The
                  child&apos;s identity, location, specific medical details, and
                  any identifying characteristics are strictly protected.
                </p>
                <div className="bg-green-50 rounded p-3 text-sm text-gray-700">
                  <strong>Safeguard:</strong> All public communications use
                  general descriptions and never include photos, videos, names,
                  or identifying details.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Eye className="h-6 w-6 text-blue-500" />
                  <CardTitle>Ethical Oversight</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">
                  Research is conducted under the supervision of faculty
                  advisors and follows institutional ethical guidelines for
                  human subjects research.
                </p>
                <div className="bg-blue-50 rounded p-3 text-sm text-gray-700">
                  <strong>Accountability:</strong> Regular reviews ensure
                  adherence to ethical standards and respect for participant
                  rights.
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Privacy & Security */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Data Privacy & Security
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What Data We Collect
              </h3>
              <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                <li>
                  Audio samples of speech attempts and responses to stimuli
                  (stored securely, never shared)
                </li>
                <li>
                  Observational notes on engagement, attention, and interaction
                  patterns (anonymized)
                </li>
                <li>
                  General developmental and communication context (no medical
                  records or diagnoses)
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How We Protect Data
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Technical Measures
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                    <li>
                      Encrypted storage of all audio and observational data
                    </li>
                    <li>Access limited to core research team only</li>
                    <li>No cloud storage of identifiable data</li>
                    <li>Regular security audits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Policy Measures
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                    <li>Data retention limited to research period</li>
                    <li>
                      No sharing with third parties under any circumstance
                    </li>
                    <li>Anonymization before any analysis or reporting</li>
                    <li>Right to request data deletion at any time</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What We DO NOT Do
              </h3>
              <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                <li>
                  We do not share audio recordings publicly or with any external
                  parties
                </li>
                <li>
                  We do not publish photos, videos, or voice samples of the
                  child
                </li>
                <li>
                  We do not use the child&apos;s real name or identifying
                  information in any public materials
                </li>
                <li>
                  We do not share data with commercial entities or for profit
                </li>
                <li>
                  We do not conduct research without ongoing consent and
                  oversight
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* No Harm Principle */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            No Harm Principle
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Our fundamental commitment:</strong> This research
                  will not cause harm—physical, emotional, social, or
                  psychological—to the child.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    How We Ensure This:
                  </h4>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>
                      All activities are designed to be enjoyable, engaging, and
                      age-appropriate
                    </li>
                    <li>
                      Sessions are short, voluntary, and can be stopped at any
                      moment
                    </li>
                    <li>
                      We monitor for signs of fatigue, frustration, or
                      discomfort and respond immediately
                    </li>
                    <li>
                      Research never interferes with medical care, therapy, or
                      educational activities
                    </li>
                    <li>
                      We maintain a positive, supportive environment that builds
                      confidence rather than pressure
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Research Supervision */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-8 w-8 text-orange-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Research Supervision & Guidance
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 mb-6">
            <p>
              This project is conducted under academic supervision with guidance
              from faculty advisors experienced in research ethics, special
              education, and human-computer interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Faculty Oversight
              </h3>
              <p className="text-gray-600 text-sm">
                Faculty advisors review research protocols, methods, and ethical
                considerations. They provide guidance on responsible research
                conduct and ensure alignment with institutional standards.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Ongoing Review
              </h3>
              <p className="text-gray-600 text-sm">
                Regular check-ins and progress reviews ensure the research
                remains ethical, appropriate, and beneficial. Any concerns or
                questions are addressed promptly with supervisory input.
              </p>
            </div>
          </div>
        </section>

        {/* Right to Withdraw */}
        <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Right to Withdraw
          </h3>
          <p className="text-gray-700">
            Parents/guardians and the child have the unconditional right to
            withdraw from this research at any time, for any reason, without
            explanation or consequence. If withdrawal is requested, all data
            will be deleted and no further contact will be made.
          </p>
        </section>

        {/* Transparency Commitment */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Transparency & Accountability
          </h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                We believe ethical research requires transparency. This website
                exists to provide visibility into our work, methods, and
                reasoning. We welcome questions, feedback, and scrutiny from:
              </p>
              <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                <li>Academic and research communities</li>
                <li>Healthcare and therapeutic professionals</li>
                <li>Disability rights advocates</li>
                <li>
                  Parents and families of children with similar challenges
                </li>
                <li>Anyone interested in ethical, human-centered research</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We are committed to conducting this work responsibly,
                respectfully, and with integrity.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
